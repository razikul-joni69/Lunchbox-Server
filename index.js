const express = require("express");
const cors = require("cors");

const chefs = require("./data/chefs.json")
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("LunchBox Server is Running");
});

app.get("/api/v1/chefs", (req, res) => {
    res.json(chefs);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
