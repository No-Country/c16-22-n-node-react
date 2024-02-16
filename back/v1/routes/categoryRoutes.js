const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all categories");
});

router.get("/:categoryId", (req, res) => {
  res.send("Get an existing category");
});

router.patch("/:categoryId", (req, res) => {
  res.send("Update an existing category");
});

router.post("/", (req, res) => {
  res.send("Create a new category");
});

router.delete("/:categoryId", (req, res) => {
  res.send("Delete an existing category");
});

module.exports = router;
