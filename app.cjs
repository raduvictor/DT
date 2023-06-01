const express = require("express");
const app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "th"
  });

con.connect(function(err) {
        if (err) throw err;
        var sql2 = "Select * FROM comments";
        con.query(sql2, function (err, result) {
          if (err) throw err;
        });
      });

  
const PORT = process.env.PORT || 6001;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));

