import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TurmasComponent } from './turmas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TurmasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [TurmasComponent],
  providers: []
})
export class TurmasModule { }
