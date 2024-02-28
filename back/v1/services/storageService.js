const streamifier = require('streamifier');
const { storageModel } = require('../../database/models');
const { uploadImage, deleteImage } = require('../../utils/cloudinary')

const getAllStorage = async () => {
    try {
        const data = await storageModel.find({});
        return data;
    } catch (e) { return `Error retrieving all storage: ${e.message}`; }

}

const getOneStorage = async (id) => {
    try {
        const data = await storageModel.find({ _id: id });
        return data;
    } catch (e) { return `Error retrieving a storage: ${e.message}`; }
}

const createNewStorage = async (body, files) => {
    var data;
    try {

        // agregar errores de formato de envío del post
        const stream = await cloudinary.uploader.upload_stream(
            {
                folder: `serviya/${body.folder}`,
            },
            async (error, result) => {
                if (error) return console.error(error);

                const resultFormatted = {
                    imageId: result.public_id,
                    imageUrl: result.secure_url
                }
                // se guardan los datos en la base de datos storage
                data = await storageModel.create(resultFormatted);
                console.log(data);
                return data;
            }
        );
        streamifier.createReadStream(files.image.data).pipe(stream);
        return 'Storage image created successfully';

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir el archivo" });
    }

}

const deleteOneStorage = async (id) => {
    try {
        // traigo un storage para saber el id de la imagen en cloudinary
        const data = await storageModel.find({ _id: id });
        // se borra la imagen de cloudinary
        const deleteImageData = await deleteImage(data[0].imageId);
        console.log(deleteImageData);
        const result = await storageModel.findOneAndDelete({ _id: id });
        return result;
    } catch (error) {
        return 'Error while deleting one storage: ' + error.message;
    }
}

const deleteAllStorage = async () => {
    try {
        const result = [];
        // traigo un storage para saber el id de la imagen en cloudinary
        const data = await storageModel.find({});
        // se borra la imagen de cloudinary
        data.map(async (d) => {
            const deleteImageData = await deleteImage(d.imageId);
            console.log(deleteImageData);
        })
        data.map(async (d) => {
            let resultDelete = await storageModel.findOneAndDelete({ _id: d._id });
            result.push(resultDelete);
        });

        return 'Delete all storage';
    } catch (error) {
        return 'Error while deleting one storage: ' + error.message;
    }
}
module.exports = {
    getAllStorage,
    getOneStorage,
    createNewStorage,
    deleteOneStorage,
    deleteAllStorage
}