const mongoose = require("mongoose");

const aplikantSchema = new mongoose.Schema({
  emri: {
    type: String,
    required: true,
  },
  mbiemri: {
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

const Aplikant = mongoose.model("Aplikant", aplikantSchema);

module.exports = Aplikant;
