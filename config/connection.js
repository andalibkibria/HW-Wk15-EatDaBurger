var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8080,
  user: 'root',
  password: '1234',
  database:'burgers_db'
});

module.exports = connection;
