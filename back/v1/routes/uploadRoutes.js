const express = require('express');
// const fileUpload = require('express-fileupload');
const router = express.Router();
const put = require('@vercel/blob').put;

// const app = express();
// app.use(fileUpload()); // Configuración de express-fileupload

// Configuración de la ruta
// router.post('/', async (req, res) => {
//     try {
//         const { filename } = req.query; // Obtener el nombre del archivo del query
//         const { body, files } = req;

//         console.log('-------------file.buffer--------------------');
//         console.log(req)
//         console.log(files);
//         console.log(filename);
//         console.log(body);
//         const blob = await put(filename, file.data, { access: 'public' }); // Subir archivo a Vercel Blob
//         res.status(200).json(blob); // Devolver respuesta JSON con la información del blob
//     } catch (error) {
//         console.error('Error subiendo archivo:', error);
//         res.status(500).json({ error: 'Ocurrió un error al subir el archivo' }); // Devolver respuesta de error
//     }
// });

//////////////////////////////////////////////

// Ruta para subir archivos
// router.post('/', async (req, res) => {
//     const { filename } = req.query; // Obtener nombre del archivo del query
//     const file = req.files; // Obtener archivo de la solicitud
//     console.log('----------------------')
//     console.log(file);
//     console.log(filename);
//     try {
//         const blob = await put(filename, file, { access: 'public' }); // Subir archivo a Vercel Blob
//         res.status(200).json(blob); // Devolver respuesta JSON con la información del blob
//     } catch (error) {
//         console.error('Error subiendo archivo:', error);
//         res.status(500).json({ error: 'Ocurrió un error al subir el archivo' }); // Devolver respuesta de error
//     }
// });



module.exports = router;
