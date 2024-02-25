const express = require("express");
const router = express.Router();

const professionalController = require("../controllers/professionalController");

router.get("/", professionalController.getAllProfessionals);

router.get("/:professionalId", professionalController.getOneProfessional);

router.patch("/:professionalId",
    professionalController.updateOneProfessional);

router.post("/",
    professionalController.createNewProfessional);

router.delete("/:professionalId", professionalController.deleteOneProfessional);

module.exports = router;
