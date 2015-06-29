'use strict';

module.exports = function LoggerFactory(application, options) {
    options = options || {label: ''};
    var label = options.label + ':'

    var console = application.getGlobal('console'),
        log = console.log.bind(console, label),
        info = console.info.bind(console, label),
        warn = console.warn.bind(console, label);

    return {
        log: log,
        info: info,
        warn: warn
    };
};
