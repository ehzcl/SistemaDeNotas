import { Turma } from '../../../../common/turma';
import { Relatorio } from './relatorio';
import { Injectable } from '@angular/core';

@Injectable()
export class RelatorioService {
  relatorio : Relatorio;
  resultado_relatorio : object;

  erroLimiteDeTempoExcedido(tempo: number) : object {
    return {erro: "não foi possível gerar relatório pois não há turmas criadas a mais de {tempo} ano(s)"};
  }

  relatorioTurma(turma: Turma) : object {
    this.relatorio = new Relatorio();
    return this.relatorio.relatorioTurma(turma);
  }

  gerarRelatorio() : object{
    return {

    };
  }

  relatorioTurmas(turmas: Turma[], tempo: number) : Relatorio{
    this.relatorio = new Relatorio();
    let anoMesAtual = new Date().toJSON().slice(0,7).replace(/-/g,'/');
    let relatorios : Relatorio[];

    for(let i=0; i <turmas.length; i++) {
      relatorios.push(this.relatorio.relatorioTurma(turmas[i]));
      if(relatorios[i].erro == null) {
        return relatorios[i];
      }
    }

    for(let i=0; i < relatorios.length; i++) {
      this.relatorio.aprovadosMedia += relatorios[i].aprovadosMedia;
      this.relatorio.final += relatorios[i].final;
      this.relatorio.reprovadosFalta += relatorios[i].reprovadosFalta;
      this.relatorio.reprovadosNota += relatorios[i].reprovadosNota;
      this.relatorio.aprovados += relatorios[i].aprovados;
      this.relatorio.totalAlunos += relatorios[i].totalAlunos;
    }

    return this.relatorio.concluirRelatorio();
  }
}
