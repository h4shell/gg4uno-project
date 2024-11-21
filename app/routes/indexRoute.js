const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");

router.get("/:code*", async (req, res) => {
  let code = req.params.code;
  if (code.includes("@")) {
    code = code.split("@")[0];
  }
  const result = await linkModel.getLink(code);
  if (result) {
    await linkModel.addClick(code);
    res.redirect(result.url);
  } else {
    res.redirect("/");
  }
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
