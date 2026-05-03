const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
});

module.exports = mongoose.model("Form", formSchema);