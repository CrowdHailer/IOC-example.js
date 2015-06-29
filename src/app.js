'use strict';

var Infrastructure = require('infrastructure');
var app = Infrastructure.create();

app.useService('logger', require('./services/logger'), {
    label: 'DEBUG',
    exports: ['log']
});
app.addFeature('shouter', require('./features/shouter'), {});
app.addFeature('color', require('./features/color'), {});

module.exports = app;
