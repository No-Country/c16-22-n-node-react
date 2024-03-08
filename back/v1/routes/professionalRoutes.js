const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");
const { protect } = require("../middleware/authorization");

router.get("/",
    //  protect,
    professionalController.getAllProfessionals);

router.get('/search/:searchQuery', protect, professionalController.getSearchProfessionals);


router.get("/:professionalId", professionalController.getOneProfessional);

router.patch("/:professionalId",
    professionalController.updateOneProfessional);

router.post("/",
    professionalController.createNewProfessional);

router.delete("/:professionalId", professionalController.deleteOneProfessional);

router.post("/login", professionalController.authenticateProfessional)

module.exports = router;
