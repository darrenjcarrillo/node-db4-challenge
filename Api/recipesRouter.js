const express = require("express");

const recipesDb = require("./recipeDb.js");

const router = express.Router();

router.get("/", (req, res) => {
  recipesDb
    .get(req.query)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  recipesDb
    .getById(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

module.exports = router;
