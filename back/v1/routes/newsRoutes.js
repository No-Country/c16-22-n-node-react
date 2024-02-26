const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");


router.get("/", newsController.getAllNews);

router.get("/:newsId", newsController.getOneNews);

router.patch("/:newsId",
    newsController.updateOneNews);

router.post("/",
    newsController.createNewNews);

router.delete("/:newsId", newsController.deleteOneNews);

module.exports = router;