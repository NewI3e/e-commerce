const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const islogin = (req, res, next) => {
  const login = false;
  if (login == true) {
    next();
  } else {
    return res.status(401).send("please log in");
  }
};

app.get("/", (req, res) => {
  res.status(200).send({
    massage: "api is {bla bla} working fine",
  });
});

app.get("/test", islogin, (req, res) => {
  res.status(200).send("api /test is working");
});

app.listen(4000, () => {
  console.log("the server is running at http://localhost:4000");
});
