Feature: Gerar Relatório da turma​
        As a professor​
        I want to gerar um relatório da turma​
        So that eu consiga ter uma visão mais simplificada do desempenho da turma

Scenario: Gerar relatório da turma​ com todas as metas já atribuidas
Given eu estou na página "Turmas"
Given eu vejo a tabela de notas da turma "ESS 2019-2" ,que possui 7 metas "Requisitos, Gerência de configuração e mudanças, Gerência de projetos, Arquitetura e linguagens de aplicações de SaaS, Testes, Projeto e implementação, Análise e refatoração de código" e duas colunas adicionais "Final, Média final"
Given o aluno "Ewerton"  está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MANA, MANA" e Final "MANA" e Média final "MANA"
Given o aluno "Paulo" está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MA, MA" e Média final "MA"
When eu seleciono a opção para gerar o relatório​
Then eu sou redirecionado para a página "Relatório"
Then eu vejo uma tabela com as informações "Aprovados por Média, Final, Reprovados por falta, Reprovados por nota, Aprovados, Total de alunos" na coluna 1, "1,1,0,1,1,2" na coluna 2 e "50.00%,50.00%,0%,50.00%,50.00%" na coluna 3​

Scenario: Gerar relatório da turma com metas não atribuidas
Given Eu estou na página "Turmas​"
And eu estou na tabela de notas da turma "ESS 2019-2"
And eu vejo na tabela de notas da turma "ESS 2019-2" as metas​ "Requisitos, Gerência de configuração e mudanças, Gerência de projetos, Arquitetura e linguagens de aplicações de SaaS, Testes, Projeto e implementação, Análise e refatoração de código" e duas colunas adicionais "Final, Média final"
And o aluno "Ewerton" está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MANA, MANA", Final "MANA" e Média final "MANA"
And o aluno "Paulo" está matrículado na turma "ESS 2019-2" e possui metas "MA, MA, MA, MA, MA, MA, "
When eu seleciono a opção para gerar o relatório de turma
Then eu sou redirecionado para a ​página "Relatório"
And e vejo uma mensagem de erro "não foi possível gerar o relatório pois há metas não atribuídas"
