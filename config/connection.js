// Dependency
var mysql = require("mysql");
/*var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "juhi@1919",
    database: "burgers_db"
  });
  connection.connect(function(err){
    if (err){
        console.log("Database Not Connect");
        return;
    }
      else{
        console.log("DataBase Connect...!");
      }
  });*/
  var connection;
console.log("JAWSDB_URL=" + process.env.JAWSDB_URL);
  if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}


// Exports the connection
module.exports = connection;
