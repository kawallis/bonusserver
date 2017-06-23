'use strict';
const Hapi = require('hapi');
const mongojs = require('mongojs');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
server.app.db = mongojs('mongodb://localhost:27017/ballers', ['ballers']);

server.register([
    require('./lib/routes/ballers')
], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });

});