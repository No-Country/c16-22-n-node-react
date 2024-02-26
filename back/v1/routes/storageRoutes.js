const express = require("express");
const router = express.Router();
const streamifier = require('streamifier');
// const { put } = require('@vercel/blob');


router.post('/', async (req, res) => {
    try {
        const { body, files } = req;

        console.log('-------------file.buffer--------------------');
        console.log(body);
        console.log(files.image.data);
        // const blob = await put("filename", request.body, {
        //     access: 'public',
        // });

        const stream = await cloudinary.uploader.upload_stream(
            {
                folder: 'serviya',
            },
            (error, result) => {
                if (error) return console.error(error);
                res.status(200).json(result);
            }
        );

        streamifier.createReadStream(files.image.data).pipe(stream);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir el archivo", error: error });
    }
});

module.exports = router;
