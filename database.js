const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to Mongodb......"));
};
