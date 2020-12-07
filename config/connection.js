var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	xehbxqv494eg9glt",
    password: "jf9gjdlbrbyl6jfe",
    database: "m1ozsvwxk0vbtfps"
  }
};

// Creating our connection
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  })
}

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


