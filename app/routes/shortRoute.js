const express = require("express");
const router = express.Router();
const linkModel = require("../models/linkModel");
const genCode = require("../modules/genCode");
const checkUrl = require("../modules/checkUrl");

router.post("/short", async (req, res) => {
  const url = req.body.url;
  try {
    const urlChecked = await checkUrl(url);

    if (urlChecked) {
      const code = genCode();
      const link = {
        code: code,
        url: urlChecked,
      };
      const response = await linkModel.addLink(link);
      console.log(response);
      if (response) {
        res.json({ code: code });
      } else {
        res.send("Error");
      }
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    res.json({ error: true });
  }
});

module.exports = router;
