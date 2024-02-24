const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

const professionalController = require("../controllers/professionalController");

router.get("/", professionalController.getAllProfessionals);

router.get("/:professionalId", professionalController.getOneProfessional);

router.patch("/:professionalId", fileUpload({
    useTempFiles: true,
    tempFileDir: "./storage"
}), professionalController.updateOneProfessional);

router.post("/", fileUpload({
    useTempFiles: true,
    tempFileDir: "./storage"
}), professionalController.createNewProfessional);

router.delete("/:professionalId", professionalController.deleteOneProfessional);

module.exports = router;
