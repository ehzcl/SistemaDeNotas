import { Avaliacao } from './avaliacao';
import { Aluno } from './aluno';

export class Matricula {
    aluno: Aluno;
    avaliacoes: Array<Avaliacao>;
    autoAvaliacoes: Array<Avaliacao>;
    media: number;
    mediaFinal: number;

    constructor(){
        this.avaliacoes = [new Avaliacao('requisitos','MA')];
        this.autoAvaliacoes = [];
        this.aluno = null;
    }

    adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }
    adicionarAutoavaliacao(autoAvaliacao: Avaliacao): void {
        this.autoAvaliacoes.push(autoAvaliacao);
    }
}
