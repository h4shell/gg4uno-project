const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");
const genCode = require("../modules/genCode");
const checkUrl = require("../modules/checkUrl");

router.get("/short/:url", async (req, res) => {
  try {
    const url = atob(req.params.url);

    const urlChecked = await checkUrl(url);

    if (urlChecked) {
      const code = genCode();
      const link = {
        code: code,
        url: urlChecked,
      };
      const response = await linkModel.addLink(link);
      if (response) {
        res.json({ code: code });
      } else {
        res.send("Link non trovato");
      }
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    res.json({ error: true });
  }
});

module.exports = router;
//aHR0cHM6Ly9nb29nbGUuaXQ=
