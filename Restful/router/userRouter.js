const express = require("express");
const hataYakalayici = require("../middleware/hataMiddleware");
const User = require("../models/userModel");
const router = express.Router();
const createError = require("http-errors");

router.get("/", async (req, res) => {
  const tumUserlar = await User.find({});
  res.json(tumUserlar);
});

router.get("/:id", async (req, res) => {
  const result = await User.find({ _id: req.params.id });

  res.json(result);
});

router.post("/", async (req, res, next) => {
  try {
    const eklenecekUser = new User(req.body);
    const { error, value } = eklenecekUser.joiValidation(req.body);

    if (error) {
      next(error);
    } else {
      const sonuc = await eklenecekUser.save();

      res.json(sonuc);
    }
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const sonuc = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (sonuc) {
      return res.json(sonuc);
    } else {
      return res.status(404).json({
        mesaj: "Kullanici bulunamadi!",
      });
    }
  } catch (err) {
    next(createError(400, err));
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await User.findByIdAndDelete({ _id: req.params.id });

    if (result) {
      return res.json({
        mesaj: "Kullanici silindi!",
      });
    } else {
      throw createError(404, "Kullanici bulunamadi");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
