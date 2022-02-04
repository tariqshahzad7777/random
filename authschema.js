const mongoose = require("mongoose");

const authschema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
});
const authschemamodel = mongoose.model("authmodel", authschema);

module.exports = authschemamodel;
