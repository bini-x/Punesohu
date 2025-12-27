const express = require("express");
const router = express.Router();
const Aplikimi = require("../models/aplikimiSchema");

router.post("/:id/aplikimi", async (req, res) => {
  try {
    const { emailAplikantit, emriAplikantit, mbiemriAplikantit } = req.body;
    console.log(req.body);

    const aplikimi = new Aplikimi({
      emailAplikantit,
      emriAplikantit,
      mbiemriAplikantit,
    });

    await aplikimi.save();

    return res.status(200).json({
      success: true,
      data: aplikimi,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Gabim i brendshem i serverit",
    });
  }
});

module.exports = router;
