const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const { protect } = require("../middleware/authorization")

router.get("/", protect, usersController.getAllUsers);

router.get("/:userId", usersController.getOneUser);

router.patch("/:userId", usersController.updateOneUser);

router.post("/", usersController.createNewUser);

router.delete("/:userId", usersController.deleteOneUser);

router.post("/login", usersController.authenticateUser);

module.exports = router;