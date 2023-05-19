const express = require('express');
const jwt = require('jsonwebtoken');
let movies = require("./movies_db.js");
const regd_users = express.Router();

let users = [];

// This function checks the username validity, and is further used in Task 6 (in general.js)
const isValid = (username)=>{
// Add the code here
}

// This function checks the username and password provided, and is used further in Task 7
const authenticatedUser = (username,password)=>{
// Add the code here
}

//Logging in as a registered user (Task 7)
regd_users.post("/login", (req,res) => {
// Add the code here
});

// Adding or modifying a review for a movie by its ID (Task 8)
regd_users.put("/auth/review/:id", (req, res) => {
// Add the code here
});


// Deleting a movie review (Task 9)
regd_users.delete("/auth/review/:id", (req, res) => {
  // Add the code here
    });


module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
