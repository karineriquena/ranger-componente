import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import do módulo do THF
import { ThfModule } from '@totvs/thf-ui';

import { AppComponent } from './app.component';
import { ThfRangeModule } from './components/thf-range';
import { SampleThfRangeBasicComponent } from './components/thf-range/samples/sample-basic/sample-thf-range-basic.component';
import { SampleThfRangeLabsComponent } from './components/thf-range/samples/sample-labs/sample-thf-range-labs.component';
import { SampleThfRangeUseCaseComponent } from './components/thf-range/samples/sample-use-case/sample-thf-range-use-case.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleThfRangeBasicComponent,
    SampleThfRangeLabsComponent,
    SampleThfRangeUseCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    // Adicionando aos imports do módulo principal da aplicação
    ThfModule,
    ThfRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
