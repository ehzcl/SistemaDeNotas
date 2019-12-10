export class Matricula {
    aluno: Aluno;
    avaliacoes: Array<Avaliacao>;
    autoAvaliacoes: Array<Avaliacao>;
    media: number;
    mediaFinal: number;

    constructor(){
        this.avaliacoes = [Avaliacao('requisitos','MA')];
        this.autoAvaliacoes = [];
        this.aluno = new Aluno();
    }

    adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }
    adicionarAutoavaliacao(autoAvaliacao: Avaliacao): void {
        this.autoAvaliacoes.push(autoAvaliacao);
    }
}
