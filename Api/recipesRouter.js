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

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  recipesDb
    .getShoppingList(id)
    .then(list => {
      if (list.length) {
        res.status(200).json(list);
      } else {
        res
          .status(404)
          .json({ message: "Could not find list for given scheme" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get list" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  recipesDb
    .getInstructions(id)
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get instructions" });
    });
});

module.exports = router;
