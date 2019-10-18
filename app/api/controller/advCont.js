'use strict';
/* controller to store Neira iklan */
var response = require('./res');
var connection = require('../conn');
var aesjs = require('aes-js');
const uuidv1 = require('uuid/v1');
var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];


exports.WriteToDb = function(data_iklan, max_count, jumlah_hari, type_iklan_s){
    console.log("DI : "+data_iklan+" MC :"+max_count +" jH "+jumlah_hari);
    /*create connection to database */
    teks_uuid = uuidv1()

    /* Ecripted */
    var textBytes = aesjs.utils.utf8.toBytes(teks_uuid);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedUUID = aesCtr.encrypt(textBytes);



    connection.connect(function(err){

        /* connector to mysql gcc*/
        var idiklan = Math.floor(new Date() / 1000);
        var conten_iklan = data_iklan;
        var counting = parseInt(max_count);
        var max_counting = parseInt(max_count);
        var iklan_type = parseInt(type_iklan_s);
        var sql ="insert into NeiraIklan(idiklan, conten_iklan, counting, max_counting, iklan_type, uuid)values (?) ";
        var values = [idiklan, conten_iklan, counting, max_counting, iklan_type, encryptedUUID];


        /* enter connection to query */
        connection.query(sql, [values], function(err, result){
            if(err)throw err;
            
            console.log("record inserted");

        });
    });
   
}