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
  required = false;
  disabled = false;
  indicators = true;
  properties: Array<string> = [];
  numbers: Array<number> = [0, 0];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'indicators', label: 'Indicators' }
  ];

  changeInterval(numbers: Array<number>){
    this.numbers[0] = numbers[0];
    this.numbers[1] = numbers[1];
  }

}
