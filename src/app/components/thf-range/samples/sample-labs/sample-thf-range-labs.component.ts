import { Component } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-range-labs',
  templateUrl: './sample-thf-range-labs.component.html',
})
export class SampleThfRangeLabsComponent {

  help = "Help";
  label = "Label"
  initialValue = 0;
  finalValue = 0;
  minValue = 0;
  maxValue = 0;
  interval = 0;
  decimalPlaces = 0;
  required = false;
  disabled = false;
  indicators = false;
  money = false;
  moneySymbol = "R$";
  properties: Array<string> = [];
  numbers: Array<number> = [0, 0];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'indicators', label: 'Indicators' },
    { value: 'money', label: 'Money' },
  ];

  public readonly moneySymbols: Array<ThfCheckboxGroupOption> = [
    { value: 'R$', label: 'R$' },
    { value: '$', label: '$' },
    { value: '€', label: '€' },
    { value: '¥', label: '¥' },
    { value: '£', label: '£' },
  ];

  changeInterval(numbers: Array<number>){
    this.numbers[0] = numbers[0];
    this.numbers[1] = numbers[1];
  }

  restore() {
    this.help = "Help";
    this.label = "Label"
    this.initialValue = 0;
    this.finalValue = 0;
    this.minValue = 0;
    this.maxValue = 0;
    this.interval = 0;
    this.decimalPlaces = 0;
    this.required = false;
    this.disabled = false;
    this.indicators = false;
    this.money = false;
    this.moneySymbol = "R$";
    this.properties = [];
    this.numbers = [0, 0];
  }

}
