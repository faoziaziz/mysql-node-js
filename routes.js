'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/neiraAll')
        .get(todoList.neiraAll);
};
