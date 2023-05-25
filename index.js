const express = require("express");
const cors = require("cors");

const chefs = require("./data/chefs.json");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("LunchBox Server is Running");
});

app.get("/api/v1/chefs", (req, res) => {
    res.json(chefs);
});

app.get("/api/v1/chef/:name", (req, res) => {
    const name = req.params.name;
    const selectedChef = chefs.find((chef) => chef.name === name);
    res.status(200).send(selectedChef);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
