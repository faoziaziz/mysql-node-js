var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "azizfaozi",
  password: "kalistaumari",
  database: "Trumon"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
