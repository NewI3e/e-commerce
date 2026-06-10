const mongouse = require("mongoose");
const { db } = require("../secret");

const connectDB = async () => {
  try {
    await mongouse.connect(db);
    console.log("cunnet db successful");

    mongouse.connection.on("error", (error) => {
      console.error("DB connection error", error);
    });
  } catch (error) {
    console.error("con not connect ", error.toString());
  }
};

module.exports = connectDB;
