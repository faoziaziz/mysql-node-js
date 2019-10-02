'use strict';
/* controller to store Neira iklan */
var response = require('./res');
var connection = require('../conn');

exports.WriteToDb = function(data_iklan, max_count, jumlah_hari, type_iklan_s){
    console.log("DI : "+data_iklan+" MC :"+max_count +" jH "+jumlah_hari);
    /*create connection to database */
    
    connection.connect(function(err){
        var idiklan = Math.floor(new Date() / 1000);
        var conten_iklan = data_iklan;
        var counting = parseInt(max_count);
        var max_counting = parseInt(max_count);
        var iklan_type = parseInt(type_iklan_s);
        var sql ="insert into NeiraIklan(idiklan, conten_iklan, counting, max_counting, iklan_type)values (?) ";
        var values = [idiklan, conten_iklan, counting, max_counting, iklan_type];
        connection.query(sql, [values], function(err, result){
            if(err)throw err;
            
            console.log("record inserted");

        });
    });
   
}