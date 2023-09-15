const mongoose = require("mongoose"); // imports mongoose
const Schema = mongoose.Schema; // defines the strcuture of documents inside a collection

const rainfallSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },

  month: {
    type: Number,
    required: true,
  },

  day: {
    type: Number,
    required: true,
  },

  atharagalla: {
    type: Number,
    required: true,
  },

  galgamuwa: {
    type: Number,
    required: true,
  },

  mediyawa: {
    type: Number,
    required: true,
  },

  mahagalkadawala: {
    type: Number,
    required: true,
  },

  streamflow: {
    type: Number,
    required: true,
  },
});

// here the first argument is the singular name of the collection
module.exports = mongoose.model("Rainfall", rainfallSchema);
