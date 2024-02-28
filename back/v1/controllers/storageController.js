const storageService = require("../services/storageService");

const getAllStorage = async (req, res) => {
    const allStorage = await storageService.getAllStorage();
    res.send(allStorage);
}

const getOneStorage = async (req, res) => {
    const id = req.params.storageId;
    const storage = await storageService.getOneStorage(id);
    res.send(storage);
}

const createNewStorage = async (req, res) => {
    const { body, files } = req;

    console.log('-------------file.buffer--------------------');
    console.log(body);
    console.log(files.image.data);

    const createdStorage = await storageService.createNewStorage(body, files);
    res.status(200).json(createdStorage);
}


const deleteAllStorage = async (req, res) => {
    const deletedAllstorage = await storageService.deleteAllStorage();
    res.send(deletedAllstorage);
}

const deleteOneStorage = async (req, res) => {
    const id = req.params.storageId;
    const deletedstorage = await storageService.deleteOneStorage(id);
    res.send(deletedstorage);

}


module.exports = {
    getAllStorage,
    getOneStorage,
    createNewStorage,
    deleteAllStorage,
    deleteOneStorage,
}