const mongoose = require("mongoose");

const aplikimiSchema = new mongoose.Schema({
  emailAplikantit: {
    type: String,
    required: true,
  },
  emriAplikantit: {
    type: String,
    required: true,
  },
  mbiemriAplikantit: {
    type: String,
    required: true,
  },
});

const Aplikimi = mongoose.model("Aplikimi", aplikimiSchema, "aplikimet");
module.exports = Aplikimi;
