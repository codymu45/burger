// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

function eat(id){
  var queryURL = `https://localhost:8080/api/burgers/${id}`; 
  $.ajax({
      url: queryURL,
      method: 'PUT'
  }).then(function(response){
      console.log(response);
  });
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;
