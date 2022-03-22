var express = require("express");
const auth = require("../middleware/auth");
var router = express.Router();

router.put("/", auth, function (req, res) {
  res.json({
    message: "HERE IST SECRET PAGE UND DU BIST AHMET CRUISE...",
  });
});

module.exports = router;
