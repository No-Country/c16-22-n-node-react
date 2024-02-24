const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

const professionalController = require("../controllers/professionalController");

router.get("/", professionalController.getAllProfessionals);

router.get("/:professionalId", professionalController.getOneProfessional);

router.patch("/:professionalId", fileUpload({
    useTempFiles: true,
    tempFileDir: "./public"
}), professionalController.updateOneProfessional);

router.post("/", fileUpload({
    useTempFiles: true,
    tempFileDir: "./back/public"
}), professionalController.createNewProfessional);

router.delete("/:professionalId", professionalController.deleteOneProfessional);

module.exports = router;
