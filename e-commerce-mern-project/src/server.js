const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    massage: "api is working fine",
  });
});

app.listen(4000, () => {
  console.log("the server is running at http://localhost:4000");
});
