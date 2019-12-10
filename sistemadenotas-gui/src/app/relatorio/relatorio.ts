import { Turma } from '../../../../common/turma';
import { Aluno } from '../../../../common/aluno';
import { Avaliacao } from '../../../../common/avaliacao';

export class Relatorio {

  resultado : Relatorio;

  aprovadosMedia : number;
  final : number;
  reprovadosFalta : number;
  reprovadosNota : number;
  aprovados : number;
  totalAlunos : number;
  erro : string;

  limparRelatorio() {
    this.aprovadosMedia = 0;
    this.final = 0;
    this.reprovadosFalta = 0;
    this.reprovadosNota = 0;
    this.aprovados = 0;
    this.totalAlunos = 0;
  }

  concluirRelatorio() : Relatorio {
    return this;
  }

  constructor () {
    this.limparRelatorio();
  }

  erroMetaNaoAtribuida() : Relatorio {
    this.erro = "não foi possível gerar o relatório pois há metas não atribuídas";
    return this;
  }

  relatorioTurma(turma : Turma) : Relatorio {
    this.limparRelatorio();
    this.totalAlunos = turma.matriculas.length;
    let numeroMetas = turma.metas.length;
    this.erro = null;
    
    for(let i=0; i < turma.matriculas.length; i++) {
      if(turma.matriculas[i].media == null) {
        this.erroMetaNaoAtribuida();
      }
      if(turma.matriculas[i].media >= 7) {
        this.aprovadosMedia++;
      } else if(turma.matriculas[i].media < 3) {
        this.reprovadosNota++;
      } else {
        this.final++;
        if(turma.matriculas[i].mediaFinal >= 5) {
          this.aprovados++;
        }
      }
    }
    return this.concluirRelatorio();
  }

  get ReprovadosNota() : number {
    return this.reprovadosNota;
  }

  get AprovadosMedia() : number {
    return this.aprovadosMedia;
  }

  get ReprovadosFalta() : number {
    return this.reprovadosFalta;
  }
  get Aprovados() : number {
    return this.aprovados;
  }

  get Final() : number {
    return this.final;
  }

  get TotalAlunos() : number {
    return this.totalAlunos;
  }
}
