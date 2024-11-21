const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");

router.get("/statistic/:code", async (req, res) => {
  try {
    const result = await linkModel.getLink(req.params.code);
    result.thisUrl = `${req.protocol}://${req.get("host")}`;
    if (result) {
      res.render("statistic", result);
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.redirect("/");
  }
});

module.exports = router;
