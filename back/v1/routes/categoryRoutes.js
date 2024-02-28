const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);

router.get("/:categoryId", categoryController.getOneCategory);

router.patch("/:categoryId",
    categoryController.updateOneCategory);

router.post("/",
    categoryController.createNewCategory);

router.delete("/:categoryId", categoryController.deleteOneCategory);

module.exports = router;
