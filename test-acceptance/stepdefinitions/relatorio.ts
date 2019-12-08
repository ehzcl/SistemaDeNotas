import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const url = "http://localhost:4200"

defineSupportCode(function ({ Given, When, Then}) {
  Given(/^eu estou na página "Turmas"$/, async() => {
    await browser.get(url);
    await $("a[name='turmasNav']").click();
    await expect(element(by.name('titulo')).getText()).to.eventually.equal('Turmas');
    await console.log($("h3[name='titulo']").getText());
  })

    Given(/^eu vejo a tabela de notas da turma "ESS 2019-2" ,que possui 7 metas "Requisitos, Gerência de configuração e mudanças, Gerência de projetos, Arquitetura e linguagens de aplicações de SaaS, Testes, Projeto e implementação, Análise e refatoração de código" e duas colunas adicionais "Final, Média final"$/, async () => {
      await expect(element(by.name('titulo')).getText()).to.eventually.equal('Turmas');
      await expect(element(by.name('turma1')).getText()).to.eventually.equal('ESS 2019-2');
      await $("a[name=turma1]").click();
      browser.sleep(10);
      await expect(element(by.name('meta1')).getText()).to.eventually.equal('Requisitos');
      await expect(element(by.name('meta2')).getText()).to.eventually.equal('Gerência de configuração e mudanças');
      await expect(element(by.name('meta3')).getText()).to.eventually.equal('Gerência de projetos');
      await expect(element(by.name('meta4')).getText()).to.eventually.equal('Arquitetura e linguagens de aplicações de SaaS');
      await expect(element(by.name('meta5')).getText()).to.eventually.equal('Testes');
      await expect(element(by.name('meta6')).getText()).to.eventually.equal('Projeto e implementação');
      await expect(element(by.name('meta7')).getText()).to.eventually.equal('Análise e refatoração de código');
      await expect(element(by.name('final')).getText()).to.eventually.equal('Final');
      await expect(element(by.name('mediaFinal')).getText()).to.eventually.equal('Média final');
    })

    Given(/^o aluno "Ewerton"  está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MANA, MANA" e Final "MANA" e Média final "MANA"$/, async () => {
      browser.sleep(10);
      await expect(element(by.name('aluno1')).getText()).to.eventually.equal('Ewerton');
      await expect(element(by.name('meta1aluno1')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta2aluno1')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta3aluno1')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta4aluno1')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta5aluno1')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta6aluno1')).getText()).to.eventually.equal('MANA');
      await expect(element(by.name('meta7aluno1')).getText()).to.eventually.equal('MANA');
      await expect(element(by.name('finalaluno1')).getText()).to.eventually.equal('MANA');
      await expect(element(by.name('mediaFinalaluno1')).getText()).to.eventually.equal('MANA');
    })

    Given(/^o aluno "Paulo" está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MA, MA" e Média final "MA"$/, async () => {
      browser.sleep(10);
      await expect(element(by.name('aluno2')).getText()).to.eventually.equal('Paulo');
      await expect(element(by.name('meta1aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta2aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta3aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta4aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta5aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta6aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('meta7aluno2')).getText()).to.eventually.equal('MA');
      await expect(element(by.name('mediaFinalaluno2')).getText()).to.eventually.equal('MA');
    })

    When(/^eu seleciono a opção para gerar o relatório​$/, async() => {
      await $("a[name='relatorioNav']").click();
    })

    Then(/^eu sou redirecionado para a página "Relatório"$/, async() => {
      await expect(element(by.name('titulo')).getText()).to.eventually.equal('Relatório');
    })

    Then(/^eu vejo uma tabela com as informações "Aprovados por Média, Final, Reprovados por falta, Reprovados por nota, Aprovados, Total de alunos" na coluna 1, "1,1,0,1,1,2" na coluna 2 e "50.00%,50.00%,0%,50.00%,50.00%" na coluna 3​$/, async() => {
      await expect(element(by.name('descricaoAprovadosMedia')).getText()).to.eventually.equal('Aprovados por média');
      await expect(element(by.name('descricaoFinal')).getText()).to.eventually.equal('Final');
      await expect(element(by.name('descricaoReprovacaoFalta')).getText()).to.eventually.equal('Reprovados por falta');
      await expect(element(by.name('descricaoReprovacaoNota')).getText()).to.eventually.equal('Reprovados por nota');
      await expect(element(by.name('descricaoAprovados')).getText()).to.eventually.equal('Aprovados');
      await expect(element(by.name('descricaoTotalAlunos')).getText()).to.eventually.equal('Total de alunos');

      await expect(element(by.name('quantidadeAprovadosMedia')).getText()).to.eventually.equal('1');
      await expect(element(by.name('quantidadeFinal')).getText()).to.eventually.equal('1');
      await expect(element(by.name('quantidadeReprovacaoFalta')).getText()).eventually.equal('0');
      await expect(element(by.name('quantidadeReprovacaoNota')).getText()).eventually.equal('1');
      await expect(element(by.name('quantidadeAprovados')).getText()).to.eventually.equal('1');
      await expect(element(by.name('quantidadeTotalAlunos')).getText()).eventually.equal('2');

      await expect(element(by.name('porcentagemAprovadosMedia')).getText()).to.eventually.equal('50.00%');
      await expect(element(by.name('porcentagemFinal')).getText()).to.eventually.equal('50.00%');
      await expect(element(by.name('porcentagemReprovacaoFalta')).getText()).to.eventually.equal('0.00%');
      await expect(element(by.name('porcentagemReprovacaoNota')).getText()).to.eventually.equal('50.00%');
      await expect(element(by.name('porcentagemAprovados')).getText()).to.eventually.equal('50.00%');
    })

})
