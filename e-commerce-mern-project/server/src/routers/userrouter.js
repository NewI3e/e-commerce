const express = require("express");
const getusers = require("../controllers/usercontroler");

const userrouter = express.Router();

// /api/users
userrouter.get("/", getusers);

// userrouter.get("/bla", (req, res) => {
//   res.status(200).send({
//     massage: "api is {bla bla} working fine",
//   });
// });

module.exports = userrouter;
