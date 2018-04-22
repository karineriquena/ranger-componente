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

  /** Nome e identificador do Input */
  @Input('name') name: string;

  /** Texto de apoio do campo */
  @Input('t-help') help?: string;

  /** Label do campo */
  @Input('t-label') label: string;

  // valor em que começa selecionado o valor inicial
  private _initialValue?: number = 0;
  @Input('t-initialValue') set initialValue(initialValue: number) {
    if (initialValue <= this.finalValue) {
      this._initialValue = initialValue;
    }else {
      this._initialValue = this.finalValue;
    }
    this.calcIntervalBar();
  }
  get initialValue(): number {
    return this._initialValue;
  }

  // valor em que começa selecionado o valor inicial
  private _finalValue?: number = 0;
  @Input('t-finalValue') set finalValue(finalValue: number) {
    if (finalValue >= this.initialValue) {
      this._finalValue = finalValue;
    }else {
      this._finalValue = this.initialValue;
    }
    this.calcIntervalBar();
  }
  get finalValue(): number {
    return this._finalValue;
  }
 
  /** Valor minimo do range */
  private _minValue?: number = 0;
  @Input('t-minValue') set minValue(minValue: number) {
    this._minValue = minValue;
    if (this.minValue > this.initialValue) { this.initialValue = minValue; }
  }
  get minValue(): number {
    return this._minValue;
  }

  /** Valor maximo do range */
  private _maxValue?: number = 0;
  @Input('t-maxValue') set maxValue(maxValue: number) {
    this._maxValue = maxValue;
    // this._majorSelectedValue = maxValue;
    if (this.finalValue == this.minValue) { this.finalValue = maxValue; }
  }
  get maxValue(): number {
    return this._maxValue;
  }

  /** Intervalo entre um número e outro */
  private _interval?: number = 1;
  @Input('t-interval') set interval(interval: number) {
    this._interval = interval;
  }
  get interval(): number {
    return this._interval;
  }

  /**
   * Indica se o campo será obrigatório
   *
   * @default false
  */
  required?: boolean = false;
  @Input('t-required') set setRequired(required: string) {
    this.required = required === '' ? true : convertToBoolean(required);
  }

  /**
   * Indica que o campo será desabilitado
   *
   * @default false
   */
  disabled?: boolean = false;
  @Input('t-disabled') set setDisabled(disabled: string) {
    this.disabled = disabled === '' ? true : convertToBoolean(disabled);
  }
  
  /**
   * Indica que mostrará os indicadores de valor
   *
   * @default false
   */
  indicators?: boolean = false;
  @Input('t-indicators') set setIndicators(indicators: string) {
    this.indicators = indicators === '' ? true : convertToBoolean(indicators);
  }
  
  /** Evento disparado ao alterar valor e deixar o campo */
  @Output('t-change') change = new EventEmitter<Array<number>>();

  ngOnInit() {
    this.calcIntervalBar();
  }

  eventOnInput(e: any) {

    if(!this.disabled) {
      this.calcIntervalBar();
      this.change.emit([this.initialValue, this.finalValue]);
    }

  }

  calcIntervalBar(): void {

    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    // this.minorSelectedValue = initialValue < finalValue ? initialValue : finalValue;
    // this.majorSelectedValue = initialValue < finalValue ? finalValue : initialValue;
    
    const percent = 100/this.calcTotNumbers();
    this.intervalBeforeSelected = this.calcTotNumbersBefore() * percent;
    this.intervalSelected = this.calcTotNumbersSelected() * percent;

  }

  calcTotNumbers(): number {
    
    const minValue = Number(this.minValue);
    const maxValue = Number(this.maxValue);
    const interval = Number(this.interval);
    
    let qtdNumbers = 0;
    if (minValue == 0) {
      qtdNumbers = ((maxValue-interval)/interval) + 1;
    } else {
      qtdNumbers = (maxValue-minValue)/interval;
    }

    return qtdNumbers;

  }

  calcTotNumbersBefore(): number {
    
    const interval = Number(this.interval);
    const minValue = Number(this.minValue);
    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    const minorSelectedValue = initialValue < finalValue ? initialValue : finalValue;
    
    let qtdNumbersBefore = 0;
    
    if (minValue == 0) {
      qtdNumbersBefore = ((minorSelectedValue-interval)/interval) + 1;
    } else {
      qtdNumbersBefore = (minorSelectedValue-minValue)/interval;
    }

    return qtdNumbersBefore;

  }

  calcTotNumbersSelected(): number {
    
    const interval = Number(this.interval);
    const initialValue = Number(this.initialValue);
    const finalValue = Number(this.finalValue);

    let qtdNumbersSelected = 0;

    const minorSelectedValue = initialValue < finalValue ? initialValue : finalValue;
    const majorSelectedValue = initialValue < finalValue ? finalValue : initialValue;
    
    if(minorSelectedValue == 0) {
      qtdNumbersSelected = ((majorSelectedValue-(minorSelectedValue + interval))/interval) + 1;
    } else {
      qtdNumbersSelected = (majorSelectedValue-minorSelectedValue)/interval;
    }

    return qtdNumbersSelected;

  }

}
