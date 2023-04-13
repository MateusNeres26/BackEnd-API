'use strict'
const cadastro = require('../requests/Cadastro.requests.js');
const cadastroPayload = require('../payloads/Cadastro.payloads');




describe('Efetuar Cadastro - API JULIO', () => {

  it('Deve realizar cadastro com sucesso - @wip', async () => {

    const response = await cadastro.post(cadastroPayload.cadastro());
    chai.expect(response.statusCode).to.equal(201);

  });

  it('Deve retornar status Conflict 409 - @wip', async () => {

      const response = await cadastro.post(cadastroPayload.cadastroEstatico('Mateus','Mateus','123456'));
      chai.expect(response.statusCode).to.equal(409);
  });

   it('Deve validar status BadRequest 400 e texto do erro - @wip', async () => {

       const response = await cadastro.post(cadastroPayload.cadastroEstatico('', 'senha'));
       chai.expect(response.statusCode).to.equal(400);
       chai.expect(response.body.error)
       .to.equal("usuarioNome, usuarioLogin e usuarioSenha são atributos obrigatórios");

   });


})




