const mongoose = require("mongoose");
// eslint-disable-next-line new-cap
const raceSchema = mongoose.Schema({
  name: String,
  namel: String,
  source: String,
  features: Array,
  skillprof: Array,
  languages: String,
  equipment: Array,
  personality: Array,
  ideal: Array,
  bond: Array,
  flaw: Array
})

module.exports = mongoose.model("background", raceSchema);