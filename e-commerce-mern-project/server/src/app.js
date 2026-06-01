const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const { xss } = require("express-xss-sanitizer");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(xss());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 5,
  message: "too many req",
});
app.use(limiter);
// const islogin = (req, res, next) => {
//   const login = true;
//   if (login == true) {
//     req.id = 101;
//     next();
//   } else {
//     return res.status(401).send("please log in");
//   }
// };

app.get("/", (req, res) => {
  res.status(200).send({
    massage: "api is {bla bla} working fine",
  });
});
/* islogin, */
app.get("/test", (req, res) => {
  console.log(req.id);
  res.status(200).json({ massage: "api /test is working" });
});

//clint error handilg
app.use((req, res, next) => {
  //   res.status(404).json({ massage: "route not found" });
  next(createError(404, "rout not found"));
});
//server error
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
  //   console.error(err.stack);
  //   res.status(500).send("Something broke!");
});

module.exports = app;
