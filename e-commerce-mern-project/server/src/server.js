const port = require("./secret");

const app = require("./app");
app.listen(port, () => {
  console.log("the server is running at http://localhost:" + port);
});
