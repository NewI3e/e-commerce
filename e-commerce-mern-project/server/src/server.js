const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post(
  "/test",
  /* islogin, */ (req, res) => {
    console.log(req.id);
    res.status(200).json({ massage: "api /test is working" });
  },
);

//clint error handilg
app.use((req, res, next) => {
  res.status(404).json({ massage: "route not found" });
  next();
});
//server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(4000, () => {
  console.log("the server is running at http://localhost:4000");
});
