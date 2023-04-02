# Automação de serviços para API do Julio de Lima

Projeto foi criado com o objetivo de padronização a criação de testes de API para os serviços da Lojinha

## Tecnologias utilizadas

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Supertest](https://github.com/visionmedia/supertest#readme)
- [chai](https://github.com/chaijs/chai)
- [mocha](https://github.com/mochajs/mocha)
- [mochawesome](https://github.com/adamgruber/mochawesome)


## Execução

- ### Por npm:
- Limpando os relatórios antes da execução dos testes:
- ```npm run allure-clear```
- Somente a suite de testes de integração: 
- ```npm run test:hml:integration```
- Gerando novo relatório do Allure Report:
- ```npm run allure-generate```


## Tutorial de construção/organição de código.

A arquitetura da automação de serviços foi pensada em uma construção por funcionalidade de cada endpoint. Ex.: O endpoint que faz login colocar dentro de uma pasta chamada `login` dentro da pasta `test` e assim por diante.  
