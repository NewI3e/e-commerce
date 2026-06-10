require("dotenv").config();

const port = process.env.SERVER_PORT || 3002;

const db = process.env.mongodbatlasurl || "mongodb://localhost:27017";
module.exports = { port, db };
