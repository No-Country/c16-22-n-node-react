

const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'serviYA'
    })
}

const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}

const stream = async (folder, data) => {
    const streamifier = require('streamifier');

    const stream = await cloudinary.uploader.upload_stream(
        {
            folder: `serviya/${folder}`,
        },
        (error, result) => {
            if (error) return error;
            return result;
        }
    );
    streamifier.createReadStream(data).pipe(stream);
    return stream.pipes;
}




module.exports = { uploadImage, deleteImage, stream };