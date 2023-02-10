const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const uri = "mongodb://127.0.0.1:27017/quiz";

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB.")
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

const getDb = () => {
    return mongoose.connection;
};

exports = { getDb };

