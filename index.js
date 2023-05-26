const express = require("express");
const cors = require("cors");

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

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

app.get("/api/v1/recipes/popular", (req, res) => {
    const popular = recipes.filter((recipe) => recipe.featured === "Popular");
    res.status(200).send(popular);
});

app.get("/api/v1/recipes/bestseller", (req, res) => {
    const bestseller = recipes.filter(
        (recipe) => recipe.featured === "BestSeller"
    );
    res.status(200).send(bestseller);
});

app.get("/api/v1/recipes/new", (req, res) => {
    const newRecipes = recipes.filter((recipe) => recipe.featured === "New");
    res.status(200).send(newRecipes);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
