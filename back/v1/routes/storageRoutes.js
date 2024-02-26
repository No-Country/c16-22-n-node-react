const express = require("express");
const router = express.Router();
const streamifier = require('streamifier');
// const { stream } = require("../../utils/cloudinary");


router.post('/', async (req, res) => {
    try {
        const { body, files } = req;

        console.log('-------------file.buffer--------------------');
        console.log(body);
        console.log(files.image.data);
        // agregar errores de formato de envío del post
        const stream = await cloudinary.uploader.upload_stream(
            {
                folder: `serviya/${body.folder}`,
            },
            (error, result) => {
                if (error) return console.error(error);
                res.status(200).json(
                    {
                        idImage: result.public_id,
                        urlImage: result.secure_url
                    }
                );
            }
        );
        streamifier.createReadStream(files.image.data).pipe(stream);
        // streamifier.createReadStream(files.image.data).pipe(stream);
        // const result = await stream(body.folder, files.image.data);
        // console.log(result);
        // res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir el archivo", error: error });
    }
});

module.exports = router;
