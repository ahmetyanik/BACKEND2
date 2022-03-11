var express = require("express");
var router = express.Router();
const { check, body } = require("express-validator");
const addUser = require("../controller/users.controller");
const validator = require("validator");

/* GET users listing. */
router.post(
  "/",

  body("person")
    .exists()
    .withMessage("Person alani bos birakilamaz!")
    .isString()
    .withMessage("Bu alana sadece string girilebilir!"),
  body("email").isEmail().withMessage("Email alaninda hata var!"),
  body("startDate").isDate(),
  body("endDate")
    .isDate()
    .custom((value, { req }) => {
      const startDate = req.body.startDate;

      if (value && startDate && validator.isAfter(value, startDate)) {
        return true;
      } else {
        throw new Error("enddate daha sonraki bir tarih olmali!");
      }
    }),

  addUser
);

module.exports = router;
