var app = require('./app');

// var enviroment = this;
// var root = this.document;

var enviroment = window;
var root = window.document;
var options = {
    debug: true
};

enviroment.ioc = app;
app.init(enviroment, root, options);
