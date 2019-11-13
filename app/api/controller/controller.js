'use strict';
/* controller to store Neira iklan */
var response = require('../controller/res');
var connection = require('../conn');

exports.neiraAll = function(req, res) {
    connection.query('SELECT * FROM NeiraParsed', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.testDate = function(req, res){
    /* Show date testing*/
    response.ok(Math.floor(new Date() / 1000), res)

};

exports.toDate = function(req, res){
    var d = new Date(Math.floor(new Date()));
    response.ok(d.toUTCString(Math.floor(new Date())), res);
};

exports.index = function(req, res) {
    response.ok("testing neriaApp!", res)
};


