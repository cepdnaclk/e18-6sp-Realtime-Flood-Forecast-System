const express = require("express");
const Rainfall = require("../models/Rainfall");

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /devices.
const router = express.Router();

// get rainfall data
router.get("/rainfall", (req, res) => {
  // get all rainfall
  Rainfall.find({}, function (err, rainfall) {
    if (err) {
      console.log(err);
      res.status(400).send("Error getting rainfall data!");
    } else {
      res.json(rainfall);
    }
  });
});

module.exports = router;
