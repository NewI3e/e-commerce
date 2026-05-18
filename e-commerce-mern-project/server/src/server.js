const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({
    massage: "api is {bla bla} working fine",
  });
});

app.listen(4000, () => {
  console.log("the server is running at http://localhost:4000");
});
