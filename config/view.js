'use strict';

const Path = require('path');

module.exports = {
    engines: {
        hbs: {
            module: require('handlebars')
        }
    },
    layout: true,
    relativeTo: Path.join(__dirname, '..'),
    path: './templates',
    layoutPath: './templates/layout'
};