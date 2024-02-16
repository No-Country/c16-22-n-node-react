const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all professionals");
});

router.get("/:professionalId", (req, res) => {
  res.send("Get an existing professional");
});

router.patch("/:professionalId", (req, res) => {
  res.send("Update an existing professional");
});

router.post("/", (req, res) => {
  res.send("Create a new professional");
});

router.delete("/:professionalId", (req, res) => {
  res.send("Delete an existing professional");
});

module.exports = router;
