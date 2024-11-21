const express = require("express");
const indexRoute = require("./routes/indexRoute");
const shortRoute = require("./routes/shortRoute");
const statisticRoute = require("./routes/statisticRoute");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src")));
app.set("view engine", "ejs");

app.use("/", indexRoute);
app.use("/", shortRoute);
app.use("/", statisticRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
