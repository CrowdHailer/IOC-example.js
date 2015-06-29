// Maybe require('./infrastructure')
'use strict';

function IOCApp () {

}

var services = {};
var _global = null;

module.exports = {
    useService: function (name, factory, options) {
        services[name] = {
            factory: factory,
            options: options,
            instance: null
        };
    },
    getService: function (name) {
        var service = services[name],
            instance = service.instance,
            application = this;

        if (instance) { return instance; }

        instance = service.factory(application, service.options);
        service.instance = instance;

        return instance;
    },
    getGlobal: function(name) {
        if (name in window) {
			return window[name];
		} else {
			return null;
		}

    },
    init: function (window, root, options) {
        _global = window;
        // this.view = new PageView({
        //     el: root,
        //     model: new Page({context: this})
        // });
        var logger = this.getService('logger')
        logger.info('new info')
        logger.log(require('./seed'))
        logger.log(require('./seed'))
        logger.log(require('./seed'))
        logger.log(require('./seed'))
    }
};
