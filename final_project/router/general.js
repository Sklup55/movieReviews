const express = require('express');
const public_users = express.Router();
let movies = require("./movies_db.js");
let isValid = require("./registered.js").isValid;
let users = require("./registered.js").users;
const axios = require("axios").default;

//Logging in as a registered user (Task 6)
public_users.post("/register", (req,res) => {
  // Complete the code for registering a new user 
  return res.status(404).json({message: "Unable to register user!"});
});

// Get the list of movies (Task 1)
public_users.get('/',function (req, res) {
//   Complete the code for getting the list of movies available in the shop
});

// Get movies based on ID  (Task 2)
public_users.get('/id/:id',function (req, res) {
//   Complete the code for getting the movie details based on id
  res.send(movies[id])
 });
  
// Get movies based on director  (Task 3)
public_users.get('/director/:director',function (req, res) {
// Complete the code for getting the movie details based on the director
  res.send(JSON.stringify({moviesbydirector}, null, 4));
});

// Get movies by their name   (Task 4)
public_users.get('/name/:name',function (req, res) {
// Complete the code for getting the movie details based on the name
  res.send(JSON.stringify({moviesbyname}, null, 4));
});

//  Get movie reviews by ID    (Task 5)
public_users.get('/review/:id',function (req, res) {
  // Complete the code for getting movie reviews based on id
});


module.exports.general = public_users;
