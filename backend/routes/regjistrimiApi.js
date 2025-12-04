const express = require("express");
const router = express.Router();
const Aplikant = require("../models/aplikantSchema");
const Punedhenes = require("../models/punedhenesSchema");

router.post("/perdoruesi", async (req, res) => {
  try {
    console.log(req.body);

    let savedUser;
    const { tipi, email, fjalekalimi, ...otherData } = req.body;

    if (!tipi || !email || !fjalekalimi) {
      return res.status(400).json({
        success: false,
        message: "Ploteso fushat!",
      });
    }

    if (tipi === "aplikant") {
      const { emri, mbiemri } = otherData;

      const aplikant = new Aplikant({
        emri,
        mbiemri,
        email,
        fjalekalimi,
      });

      savedUser = await aplikant.save();
    } else if (tipi === "punedhenes") {
      const { kompania } = otherData;

      const punedhenes = new Punedhenes({
        kompania,
        email,
        fjalekalimi,
      });

      savedUser = await punedhenes.save();
    } else {
      return res.status(400).json({
        success: false,
      });
    }

    return res.json({
      success: true,
      message: `${
        tipi === "aplikant" ? "Aplikanti" : "Punëdhënësi"
      } u regjistrua me sukses!`,
    });
  } catch (error) {
    console.error("Error in regjistrohu:", error);
    res.status(500).json({
      success: false,
      message: "Gabim i brendshëm i serverit",
      error: error.message,
    });
  }
});

module.exports = router;
