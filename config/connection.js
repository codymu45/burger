var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    // host: "mullenburger.herokuapp.com",
    // port: 3306,
    // user: "root",
    // password: "password",
    // database: "burgers_DB"
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    user: "b8976df18bd51f",
    password: "c27e1428",
    database: "heroku_48c252aa70bd948"
  }
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
