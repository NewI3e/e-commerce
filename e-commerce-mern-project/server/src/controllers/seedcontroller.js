const data = require("../data");
const user = require("../models/usermodel");

const seeduser = async (req, res, next) => {
  try {
    // deleting all exsisting users
    await user.deleteMany({});
    // inserting nw user
    const users = await user.insertMany(data.users);

    // successfull res
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = seeduser;
