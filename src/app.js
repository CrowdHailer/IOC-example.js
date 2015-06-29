'use strict';

var infrastructure = require('infrastructure');
var app = infrastructure();

app.useService('logger', require('./services/logger'), {
    label: 'DEBUG'
});
app.addFeature('shouter', require('./features/shouter'), {});

app.init = function (window, root, options) {
    // init should be defined locally for setters
    this._global = window;
    this._root = root;

    var logger = this.getService('logger');
    logger.log('App started');

    this.startFeature('shouter');

};

module.exports = app;
