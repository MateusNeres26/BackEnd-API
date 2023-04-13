const faker = require('faker');

module.exports = {
    cadastro: (userLogin) => {
        const username = faker.name.firstName();
        const userlogin = faker.internet.userName();
        const password = '1234';


        return {
            usuarioNome: username,
            usuarioLogin: userlogin,
            usuarioSenha: password
        }
    },
        cadastroEstatico: (username, userlogin, password) => {
            return {
                usuarioNome: username,
                usuarioLogin: userlogin,
                usuarioSenha: password
            }
        }
}