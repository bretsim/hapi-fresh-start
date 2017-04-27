const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection(require('./config/connection'));

server.register([
    {
        register: require('good'),
        options: require('./config/good')
    },
    {
        register: require('hapi-auto-route'),
    },
    {
        register: require('vision')
    }
], (error) => {

    if(error) {
        server.log(error);
    }

    server.start((error) => {

        if(error) {
            server.log(error);
        }
        server.log(`Server is running`);
        server.views(require('./config/view'));
    });
});
