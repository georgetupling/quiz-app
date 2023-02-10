const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port = process.env.port || 3000, () => {
    console.log(`Server is running on port ${port}.`)
});