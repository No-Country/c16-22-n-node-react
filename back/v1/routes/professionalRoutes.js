const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");

router.get("/",
    //  protect,
    professionalController.getAllProfessionals);

    
router.get("/:professionalId", professionalController.getOneProfessional);

router.patch("/:professionalId",
    professionalController.updateOneProfessional);

router.post("/",
    professionalController.createNewProfessional);

router.delete("/:professionalId", professionalController.deleteOneProfessional);

router.post("/login", professionalController.authenticateProfessional)

module.exports = router;
