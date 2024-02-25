const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'serviYA'
    })
}

const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}




module.exports = { uploadImage, deleteImage };