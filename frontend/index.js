const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
