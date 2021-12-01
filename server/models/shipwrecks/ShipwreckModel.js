//! Task 4 ----------------------------------

const { Schema, model } = require("mongoose");

const shipwreckSchema = new Schema({
  recrd: String,
  vesslterms: String,
  feature_type: String,
  chart: String,
  latdec: Number,
  londec: Number,
  qp_quality: String,
  depth: Number,
  sounding_type: String,
  history: String,
  quasou: String,
  watlev: String,
  coordinates: [String],
});

const ShipwreckModel = model("shipwrecks", shipwreckSchema);

module.exports = ShipwreckModel;
