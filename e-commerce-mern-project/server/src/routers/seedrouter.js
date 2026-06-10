const express = require("express");
const seeduser = require("../controllers/seedcontroller");
const seedrouter = express.Router();

seedrouter.get("/users", seeduser);

module.exports = seedrouter;
