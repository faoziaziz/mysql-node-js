'use strict';

var response = require('./res');
var connection = require('./conn');

exports.neiraAll = function(req, res) {
    connection.query('SELECT * FROM NeiraParsed', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("testing neriaApp!", res)
};
