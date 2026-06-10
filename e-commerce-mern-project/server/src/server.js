const { port } = require("./secret");

const app = require("./app");
const connectDB = require("./config/db");

app.listen(port, async () => {
  console.log("the server is running at http://localhost:" + port);
  await connectDB();
});
