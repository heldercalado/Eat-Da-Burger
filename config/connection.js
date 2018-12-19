var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : process.env.localhost,
  user     : process.env.user,
  password : process.env.password,
  database : process.env.database
});
 
connection.connect();
 


module.exports = connection;