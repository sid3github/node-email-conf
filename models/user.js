var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  { collection: "emails" }
);

module.exports = mongoose.model("users", userSchema);
