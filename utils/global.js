const chai = require('chai')
const productionEnv = require('../env/production.env.json')
const homologEnv = require('../env/homolog.env.json')

function getBaseUrl() {
    switch(process.env.NODE_ENV) {
        case "production":
            console.info(`Iniciado os testes para o ambiente ${productionEnv.url}`);
            return productionEnv.url
        case "homolog":
            console.info(`Iniciado os testes para o ambiente ${homologEnv.url}`);
            return homologEnv.url
        default:
            chai.assert.fail("Ambiente não implementado.")
    }
}

global.chai = chai

const base = {
    url: getBaseUrl(),

}

module.exports = {
    base
}