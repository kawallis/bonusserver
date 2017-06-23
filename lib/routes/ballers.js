const Boom = require('boom');

exports.register = function (server, options, next) {
    const db = server.app.db;
    
    server.route({
        method: 'GET',
        path: '/ball',
        handler: function (request, reply) {
            db.ballers.find((err, ballers) => {
                if (err) {
                    return reply(Boom.wrap(err, 'FAILURE'));
                }
                reply(JSON.stringify(ballers));
            });
        }
    });

    server.route({
        method: 'GET',
        path: '/find/{id}',
        handler: function (request, reply) {
            db.ballers.findOne({'id': request.params.userId},(err, ballers) => {
                if (err) {
                    return reply(Boom.wrap(err, 'FAILURE'));
                }
                reply(JSON.stringify(ballers));
            });
        }
    });

    server.route({
        method: 'POST',
        path: '/newballer',
        handler: function (request, reply) {
            console.log(request.payload)
            db.ballers.insert({'name': request.payload.name, 'team': request.payload.team, 'number': request.payload.number},(err, ballers) => {
                if (err) {
                    return reply(Boom.wrap(err, 'FAILURE'));
                }
                reply(JSON.stringify(ballers));
            });
        }
    });
    return next();
};

exports.register.attributes = {
    name: 'routes-ballers'
};