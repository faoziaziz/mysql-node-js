var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "trumon",
  password: "tappingbox123",
  database: "Trumon"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
