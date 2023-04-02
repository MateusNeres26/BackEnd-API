'use strict'
const loginJwt = require('../requests/LoginJwt.requests.js');


describe('Login - API JULIO', () => {

it('Deve realizar login com sucesso - @wip', async () => {

    const payload = {
        usuarioLogin: 'Mateus',
        usuarioSenha: '123456'
      };
      const response = await loginJwt.post(payload);
      chai.expect(response.statusCode).to.equal(200);
    });

it('Deve retornar Unauthorized ao falhar no login - @wip', async () => {

      const payload = {
          usuarioLogin: 'Mateus',
          usuarioSenha: '1234567'
        };
        const response = await loginJwt.post(payload);
        chai.expect(response.statusCode).to.equal(401);
      });

  })




