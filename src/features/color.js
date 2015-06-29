'use strict';

var View = require('ampersand-view');

var ColorView = View.extend({
    template: function () { return this.el; },
    events: {
        'keyup input': 'changed'
    },
    bindings: {
        'model.color': {
            type: 'class',
        }
    },
    changed: function (evt) {
        evt.stopImmediatePropagation();
        var value = evt.target.value;
        this.model.changed(value);
    }
});

var Model = require('ampersand-model');

var Color = Model.extend({
    session: {
        color: 'string'
    },
    changed: function (value) {
        this.color = value;
    }
});

module.exports = function function_name($element, context, options) {
    // Take optional callback to define null logger
    var model = new Color();
    var view = new ColorView({el: $element, model: model});
    window.view = view;
};
