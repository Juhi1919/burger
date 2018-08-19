// Connecting Node to burgers_db in MySQL
var mysql = require('mysql');
var connection;

// Setting up connection for use on Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// Localhost connection
else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'juhi@1919',
    database : 'burgers'
  });
};
connection.connect();
module.exports = connection; 