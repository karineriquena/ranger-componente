import { Component, OnInit, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { convertToBoolean } from '../../utils/util';

@Component({
  selector: 'thf-range',
  templateUrl: './thf-range.component.html',
  styleUrls: ['./thf-range.component.css']
})
export class ThfRangeComponent implements OnInit {

  constructor() { }

  private _intervalBeforeSelected: number;
  set intervalBeforeSelected(intervalBeforeSelected: number) {
    this._intervalBeforeSelected = intervalBeforeSelected;
  }
  get intervalBeforeSelected(): number {
    return this._intervalBeforeSelected;
  }

  private _intervalSelected: number;
  set intervalSelected(intervalSelected: number) {
    this._intervalSelected = intervalSelected;
  }
  get intervalSelected(): number {
    return this._intervalSelected;
  }

  private _minorSelectedValue: number;
  set minorSelectedValue(minorSelectedValue: number) {
    this._minorSelectedValue = Number(minorSelectedValue);
  }
  get minorSelectedValue(): number {
    return this._minorSelectedValue;
  }

  private _majorSelectedValue: number;
  set majorSelectedValue(majorSelectedValue: number) {
    this._majorSelectedValue = Number(majorSelectedValue);
  }
  get majorSelectedValue(): number {
    return this._majorSelectedValue;
  }

  /** Nome e identificador do Input */
  @Input('name') name: string;

  /** Texto de apoio do campo */
  @Input('t-help') help?: string;

  /** Label do campo */
  @Input('t-label') label: string;

  /** Casas decimais do range */
  private _decimalPlaces?: number = 0;
  @Input('t-decimalPlaces') set decimalPlaces(decimalPlaces: number) {
    this._decimalPlaces = decimalPlaces;
  }
  get decimalPlaces(): number {
    return this._decimalPlaces;
  }

  /** Valor minimo do range */
  private _minValue?: number = 0;
  @Input('t-minValue') set minValue(minValue: number) {
    this._minValue = minValue;
    
    if(this.initialValue < minValue) {
      this.initialValue = minValue;
    }

    if(this.finalValue < minValue) {
      this.finalValue = minValue;
    }

    this.calcIntervalBar();
    
  }
  get minValue(): number {
    return this._minValue;
  }

  /** Valor maximo do range */
  private _maxValue?: number = 0;
  @Input('t-maxValue') set maxValue(maxValue: number) {
    this._maxValue = maxValue;

    if(this.initialValue > maxValue) {
      this.initialValue = maxValue;
    }

    if(this.finalValue > maxValue) {
      this.finalValue = maxValue;
    }

    this.calcIntervalBar();

  }
  get maxValue(): number {
    return this._maxValue;
  }

  // valor em que começa selecionado o valor inicial
  private _initialValue?: number = 0;
  @Input('t-initialValue') set initialValue(initialValue: number) {
      this._initialValue = initialValue;
      if (initialValue > this.finalValue) {
        this.minorSelectedValue = this.finalValue;
        this.majorSelectedValue = this.initialValue;
      } else {
        this.minorSelectedValue = this.initialValue;
        this.majorSelectedValue = this.finalValue;
      }
      this.calcIntervalBar();
  }
  get initialValue(): number {
    return this._initialValue;
  }

  // valor em que começa selecionado o valor inicial
  private _finalValue?: number = 0;
  @Input('t-finalValue') set finalValue(finalValue: number) {
    this._finalValue = finalValue;
    if (finalValue < this.initialValue) {
      this.minorSelectedValue = this.finalValue;
      this.majorSelectedValue = this.initialValue;
    } else {
      this.minorSelectedValue = this.initialValue;
      this.majorSelectedValue = this.finalValue;
    }
    this.calcIntervalBar();
  }
  get finalValue(): number {
    return this._finalValue;
  }

  /** Intervalo entre um número e outro */
  private _interval?: number = 0;
  @Input('t-interval') set interval(interval: number) {
    this._interval = interval;
    this.calcIntervalBar();
  }
  get interval(): number {
    return this._interval;
  }

  /**
   * Indica se o campo será obrigatório
   *
   * @default false
  */
 private _required?: boolean = false;
  @Input('t-required') set required(required: boolean) {
    this._required = <any>required === '' ? true : convertToBoolean(required);
  }
  get required(): boolean {
    return this._required;
  }

  /**
   * Indica que o campo será desabilitado
   *
   * @default false
   */
  private _disabled?: boolean = false;
  @Input('t-disabled') set disabled(disabled: boolean) {
    this._disabled = <any>disabled === '' ? true : convertToBoolean(disabled);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Indica que mostrará os indicadores de valor
   *
   * @default false
   */
  private _indicators?: boolean = false;
  @Input('t-indicators') set indicators(indicators: boolean) {
    this._indicators = <any>indicators === '' ? true : convertToBoolean(indicators);
  }
  get indicators(): boolean {
    return this._indicators;
  }

  /**
 * Indica que mostrará os indicadores de valor
 *
 * @default false
 */
  private _money?: boolean = false;
  @Input('t-money') set money(money: boolean) {
    this._money = <any>money === '' ? true : convertToBoolean(money);
  }
  get money(): boolean {
    return this._money;
  }

  /**
 * Indica que mostrará os indicadores de valor
 *
 * @default 'R$'
 */
  private _moneySymbol?: string = 'R$';
  @Input('t-moneySymbol') set moneySymbol(moneySymbol: string) {
    this._moneySymbol = moneySymbol;
  }
  get moneySymbol(): string {
    return this._moneySymbol;
  }

  /** Evento disparado ao alterar valor e deixar o campo */
  @Output('t-change') change = new EventEmitter<Array<number>>();

  ngOnInit() {
    this.calcIntervalBar();
  }

  eventOnInput() {

    if(!this.disabled) {
      
      const initialValue = Number(this.initialValue);
      const finalValue = Number(this.finalValue);
  
      this.minorSelectedValue =  initialValue < finalValue ? initialValue : finalValue;
      this.majorSelectedValue =  initialValue < finalValue ? finalValue : initialValue;
      
      this.calcIntervalBar();
      this.change.emit([this.minorSelectedValue, this.majorSelectedValue]);
    }

  }

  calcIntervalBar(): void {

    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    const totNumbers = this.calcTotNumbers();
    const percent = totNumbers > 0 ? 100/this.calcTotNumbers() : 0;
    this.intervalBeforeSelected = this.calcTotNumbersBefore() * percent;
    this.intervalSelected = this.calcTotNumbersSelected() * percent;

  }

  calcTotNumbers(): number {

    const minValue = Number(this.minValue);
    const maxValue = Number(this.maxValue);
    const interval = Number(this.interval);

    let qtdNumbers = 0;
    
    if (interval > 0) {
      if (minValue == 0) {
        qtdNumbers = ((maxValue-interval)/interval) + 1;
      } else {
        qtdNumbers = (maxValue-minValue)/interval;
      }
    }

    return qtdNumbers;

  }

  calcTotNumbersBefore(): number {

    const interval = Number(this.interval);
    const minValue = Number(this.minValue);
    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    let qtdNumbersBefore = 0;

    if (interval > 0) {
      if (minValue == 0) {
        qtdNumbersBefore = ((this.minorSelectedValue-interval)/interval) + 1;
      } else {
        qtdNumbersBefore = (this.minorSelectedValue-minValue)/interval;
      }
    }

    return qtdNumbersBefore;

  }

  calcTotNumbersSelected(): number {

    const interval = Number(this.interval);
    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    let qtdNumbersSelected = 0;

    if(interval > 0) {
      if(this.minorSelectedValue == 0) {
        qtdNumbersSelected = ((this.majorSelectedValue-(this.minorSelectedValue + interval))/interval) + 1;
      } else {
        qtdNumbersSelected = (this.majorSelectedValue-this.minorSelectedValue)/interval;
      }
    }

    return qtdNumbersSelected;

  }

}
