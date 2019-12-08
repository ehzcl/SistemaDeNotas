import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurmasModule } from './turmas.module';
import { RelatorioModule } from './relatorio/relatorio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RelatorioModule,
    TurmasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
