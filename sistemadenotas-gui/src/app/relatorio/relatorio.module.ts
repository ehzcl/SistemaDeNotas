import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RelatorioComponent } from './relatorio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [RelatorioComponent],
  providers: []
})
export class RelatorioModule { }
