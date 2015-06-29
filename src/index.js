var app = require('./app');

// var enviroment = this;
// var root = this.document;

var enviroment = window;
var root = window.document;
var options = {
    debug: true
};

app.useService('logger', require('./services/logger'), {
    label: 'DEBUG'
});


app.init(enviroment, root, options);
