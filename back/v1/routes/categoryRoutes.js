const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);

router.get("/:categoryId", categoryController.getOneCategory);

router.patch("/:categoryId", fileUpload({
    useTempFiles: true,
    tempFileDir: "./public"
}), categoryController.updateOneCategory);

router.post("/", fileUpload({
    useTempFiles: true,
    tempFileDir: "./public"
}), categoryController.createNewCategory);

router.delete("/:categoryId", categoryController.deleteOneCategory);

module.exports = router;
