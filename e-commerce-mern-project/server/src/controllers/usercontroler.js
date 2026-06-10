const createError = require("http-errors");
const user = require("../models/usermodel");
const getusers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "user ware returned",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getusers;
