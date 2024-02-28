const express = require("express");
const router = express.Router();
const storageController = require("../controllers/storageController");

router.get('/', storageController.getAllStorage);

router.get('/:storageId', storageController.getOneStorage);

router.post('/', storageController.createNewStorage);

router.delete('/:storageId', storageController.deleteOneStorage);

router.delete('/', storageController.deleteAllStorage);


module.exports = router;
