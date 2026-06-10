const bcrypt = require("bcrypt");

const { Schema, model } = require("mongoose");
const { set } = require("../app");
const userschema = new Schema(
  {
    name: {
      type: String,
      requred: [true, "user name is is miessing"],
      trim: true,
      maxlenght: [31, "the max lenght is 31"],
      minlenght: [2, "the min lenght is 2"],
    },
    email: {
      type: String,
      requred: [true, "user email is is miessing"],
      trim: true,
      unique: true,
      Validite: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },

        message: "Please enter a valid email address!",
      },
    },

    password: {
      type: String,
      required: [true, "User password is required"],
      minlength: [6, "The length of user password can be minimum 6 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
  },
  { timestamps: true },
);

const user = model("users", userschema);
module.exports = user;
