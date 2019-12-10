import { Matricula } from './matricula';

export class Turma {
    nome: String;
    materia: String;
    matriculas: Matricula[];
    metas: String[];

    constructor() {
      this.nome = 'ess';
      this.materia = "ess";
      this.matriculas.push(new Matricula());
      this.metas.push('requisitos');
    }
}
