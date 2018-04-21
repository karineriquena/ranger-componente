import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import do módulo do THF
import { ThfModule } from '@totvs/thf-ui';

import { AppComponent } from './app.component';
import { ThfRangeComponent } from './components/thf-range/thf-range.component';

@NgModule({
  declarations: [
    AppComponent,
    ThfRangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    // Adicionando aos imports do módulo principal da aplicação
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
