import { Turma } from '../../../../common/turma';
import { Matricula } from '../../../common/matricula';
import { Avaliacao } from '../../../../common/avaliacao';

@Injectable
export class RelatorioService {
  relatorio : Relatorio;

  erroLimiteDeTempoExcedido(tempo: number) : object {
    this.relatorio = {erro: "não foi possível gerar relatório pois não há turmas criadas a mais de {tempo} ano(s)"};
    return this.relatorio;
  }

  relatorioTurma(turma: Turma) : object {
    this.relatorio = new Relatorio();
    return this.relatorio.relatorioTurma(turma);
  }

  relatorioTurmas(turmas: Turma[], tempo: number) : object{
    this.relatorio = new Relatorio();
    let anoMesAtual = new Date().toJSON().slice(0,7).replace(/-/g,'/');
    let relatorios : object[] = [];

    for(let i in turmas) {
      relatorios.push(relatorioTurma(i));
    }

    for(let i in relatorios) {
      this.relatorio.aprovadosMedia+= i.aprovadosMedia;
      this.relatorio.final += i.final;
      this.relatorio.reprovadosFalta += i.reprovadosFalta;
      this.relatorio.reprovadosNota += i.reprovadosNota;
      this.relatorio.aprovados += i.aprovados;
      this.relatorio.totalAlunos += i.totalAlunos;
    }

    this.relatorio.concluirRelatorio();
    return concluirRelatorio();
  }
}
