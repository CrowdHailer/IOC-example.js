'use strict';

var infrastructure = require('infrastructure');
var app = infrastructure();

app.useService('logger', require('./services/logger'), {
    label: 'DEBUG'
});
app.addFeature('shouter', require('./features/shouter'), {});

module.exports = app;
