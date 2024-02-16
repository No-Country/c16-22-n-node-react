const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);

router.get("/:userId", usersController.getOneUser);

router.patch("/:userId", usersController.updateOneUser);

router.post("/", usersController.createNewUser);

router.delete("/:userId", usersController.deleteOneUser);

module.exports = router;