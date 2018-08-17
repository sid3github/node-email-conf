var mongoose = require("mongoose");

module.export = mongoose.connect(
  "mongodb://localhost/node-email-verification",
  function(err) {
    if (err) throw err;
    console.log("Database connected");
  }
);
