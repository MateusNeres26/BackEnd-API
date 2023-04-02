'use strict'
const global = require('../../../utils/global');
const supertest = require('supertest');


module.exports = {
    post: (payload) => {
        return supertest(global.base.url).post('/v2/login').send(payload)
        .set('Content-Type', 'application/json')
    }
}