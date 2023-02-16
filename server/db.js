const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv").config();

// const uri = "mongodb://127.0.0.1:27017/quiz";
const uri = process.env.DB_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = mongoose.connection;
