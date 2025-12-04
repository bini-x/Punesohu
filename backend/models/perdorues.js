const mongoose = require("mongoose");

const perdoruesSchema = new mongoose.Schema({
  tipi: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Perdorues = mongoose.model("Perdorues", perdoruesSchema);

module.exports = Perdorues;
