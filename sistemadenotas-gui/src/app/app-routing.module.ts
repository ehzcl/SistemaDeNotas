import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioComponent } from './relatorio/relatorio.component';
import { TurmasComponent } from './turmas.component';

const routes: Routes = [
  {path: 'relatorio', component: RelatorioComponent},
  {path: 'turmas', component: TurmasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
