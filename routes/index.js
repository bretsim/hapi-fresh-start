'use strict';

module.exports = {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.view('index', { title: 'Hapi-fresh-start' });
    }
}