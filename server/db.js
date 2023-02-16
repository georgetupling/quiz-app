const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const uri = "mongodb://127.0.0.1:27017/quiz";
const uri =
  "mongodb+srv://george:myadItRRZxlSTNPC@cluster0.4q5sans.mongodb.net/quiz?retryWrites=true&w=majority";

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
