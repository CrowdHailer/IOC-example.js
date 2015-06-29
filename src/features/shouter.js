'use strict';

module.exports = function function_name($element, context, options) {
    // Take optional callback to define null logger
    var logger = context.getService('logger');

    $element.addEventListener('click', function(){
        logger.log('clicked');
    });
};
