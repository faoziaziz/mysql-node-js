'use strict';
/* controller to store Neira iklan */
var response = require('./res');
var connection = require('../conn');
var aesjs = require('aes-js');
const uuidv1 = require('uuid/v1');
var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


exports.WriteToDb = function (data_iklan, type_iklan_s, tanggal_kadaluarsa, flagPost) {
   // console.log("DI : " + data_iklan + " MC :" + max_count + " jH " + tanggal_kadaluarsa);
    /*create connection to database */
    var teks_uuid = uuidv1()

    /* Ecripted */
    var textBytes = aesjs.utils.utf8.toBytes(teks_uuid);
    
    // The counter is optional, and if omitted will begin at 1
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    
    // To print or store the binary data, you may convert it to hex
    var encryptedUUID = aesjs.utils.hex.fromBytes(encryptedBytes);

    /* date variable for expiring */
    var expiry_date = Date(tanggal_kadaluarsa);
    /* id timetstamp */
    var idiklan = Math.floor(new Date() / 1000);
    var content_iklan = data_iklan;
    var flag = parseInt(flagPost);
    //var counting = parseInt(max_count);
    //var max_counting = parseInt(max_count);

    var iklan_type = parseInt(type_iklan_s);



    connection.connect(function (err) {

        console.log("wew");
        var sql = "insert into NeiraIklanVer2(ID_TGL, UUID, UUID_ENC, Content, ExpiryDate, TipeIklan, Flag)values (?) ";
        var values = [idiklan, teks_uuid, encryptedUUID, content_iklan, expiry_date, iklan_type, flag];

        console.log(values)

        /* enter connection to query */
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;

            console.log("record inserted");

        });
    });

}