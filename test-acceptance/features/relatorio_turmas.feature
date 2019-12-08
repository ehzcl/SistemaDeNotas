Feature: Gerar Relatório de turmas​
        As a professor​
        I want to gerar um relatório de todas turmas em um período de tempo especificado​
        So that eu consiga ter uma visão mais simplificada do desempenho da turma

Scenario: Gerar relatório de turmas no período de 1 ano
Given eu estou na página "Turmas"​
And eu vejo as turmas "ESS 2019-1, ESS 2019-2"
And as turmas "ESS 2019-2, ESS 2019-1" possuem metas "Requisitos, Gerência de configuração e mudanças, Gerência de projetos, Arquitetura e linguagens de aplicações de SaaS, Testes, Projeto e implementação, Análise e refatoração de código", e mais duas, "Final, Média final"​
And o aluno "Ewerton" está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MANA, MANA" e Final "MANA" e Média final "MANA"
And o aluno "Paulo" está matrículado na turma​ "ESS 2019-1" e possui metas "MA, MA, MA, MA, MA, MA, MA" e Média final "MA"
When eu seleciono a opção para gerar o relatório de turmas​
Then eu sou redirecionado para a ​página "Relatório"
And eu vejo uma tabela com as informações "Aprovados por Média, Final, Reprovados por falta, Reprovados por nota, Aprovados, Total de alunos" na coluna 1, "1,1,0,1,1,2" na coluna 2 e "50.00%,50.00%,0%,50.00%,50.00%" na coluna 3

Scenario: Gerar relatório de turmas fora do período de tempo
Given eu estou na página "Turmas"
And eu vejo 5 turmas "ESS 2019-2, ESS 2019-1, ESS 2018-2"
And as turmas "ESS 2019-2, ESS 2019-1, ESS 2018-2" possuem metas, "Requisitos, Gerência de configuração e mudanças, Gerência de projetos, Arquitetura e linguagens de aplicações de SaaS, Testes, Projeto e implementação, Análise e refatoração de código", e mais duas, "Final, Média final"​
And o aluno "Ewerton"   está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MANA, MANA" e Final "MANA" e Média final "MANA"
And o aluno "Paulo" está matrículado na turma​ "ESS 2019-1" e possui metas "MA, MA, MA, MA, MA, MA, MA" e Média final "MA"
And o aluno "Pedro" está matrículado na turma "ESS 2018-2" e possui metas "MA, MA, MA, MA, MA, MA, MA" e Média final "MA"
When eu seleciono a opção para gerar relatório entre turmas
And escolho "3" ano na opção de tempo
Then eu sou redirecionado para a página "Relatório"
And eu vejo uma mensagem de erro "não foi possível gerar relatório pois não há turmas criadas a mais de 1 ano"
