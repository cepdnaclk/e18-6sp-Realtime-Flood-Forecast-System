const mongoose = require("mongoose"); // imports mongoose
const Schema = mongoose.Schema; // defines the strcuture of documents inside a collection

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 255,
  },

  lastName: {
    type: String,
    required: true,
    max: 255,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    max: 255,
  },

  phone: {
    type: String,
    max: 10,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
