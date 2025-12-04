const mongoose = require("mongoose");

const punedhenesSchema = new mongoose.Schema({
  kompania: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fjalekalimi: {
    type: String,
    required: true,
  },
});

const Punedhenes = mongoose.model("Punedhenes", punedhenesSchema);

module.exports = Punedhenes;
