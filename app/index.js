const express = require("express");
const indexRoute = require("./routes/indexRoute");
const shortRoute = require("./routes/shortRoute");
const statisticRoute = require("./routes/statisticRoute");
const app = express();

app.set("view engine", "ejs");

app.use("/", indexRoute);
app.use("/", shortRoute);
app.use("/", statisticRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
