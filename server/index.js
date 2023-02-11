const express = require("express");
const path = require("path");
const db = require("./db");
const { urlencoded } = require("express");

const app = express();

const questionRouter = require("./routes/question"); 
app.use("/question", questionRouter);

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(port = process.env.port || 3000, () => {
    console.log(`Server is running on port ${port}.`);
});