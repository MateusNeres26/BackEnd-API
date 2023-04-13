'use strict'
const loginJwt = require('../requests/LoginJwt.requests.js');
const loginPayload = require('../payloads/loginFilter.payloads');




describe('Efetuar Login - API JULIO', () => {

  it('Deve realizar login com sucesso - @wip', async () => {

    const response = await loginJwt.post(loginPayload.login('Mateus', '123456'));
    chai.expect(response.statusCode).to.equal(200);
  });

  it('Deve retornar Unauthorized ao falhar o login - @wip', async () => {

      const response = await loginJwt.post(loginPayload.login('Mateus', '1234567'));
      chai.expect(response.statusCode).to.equal(401);
  });


})




