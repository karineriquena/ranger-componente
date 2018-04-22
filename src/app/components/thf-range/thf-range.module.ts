import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThfRangeComponent } from './thf-range.component';

/**
 * @description
 * Módulo do componente thf-range
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ThfRangeComponent
  ],
  exports: [
    ThfRangeComponent
  ]
})
export class ThfRangeModule { }
