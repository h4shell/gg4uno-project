const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");

router.get("/:code", async (req, res) => {
  const result = await linkModel.getLink(req.params.code);
  if (result) {
    await linkModel.addClick(req.params.code);
    res.redirect(result.url);
  } else {
    res.redirect("/");
  }
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
