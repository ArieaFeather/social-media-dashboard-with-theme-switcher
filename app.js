const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const items = require(__dirname + "/public/dashboardInfo.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", { newItems: items });
});

app.listen(8080, () => {
    console.log("Press [X] to Start");
});
