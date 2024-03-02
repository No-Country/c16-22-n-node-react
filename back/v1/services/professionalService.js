const { professionalModel } = require('../../database/models');
const { storageModel } = require('../../database/models');
const { uploadImage, deleteImage } = require('../../utils/cloudinary')
// const fs = require('fs-extra');


const getAllProfessionals = async () => {
  try {
    const data = await professionalModel.find({});
    return data;
  } catch (err) { return err.message }

};

const getOneProfessional = async (id) => {
  try {
    const data = await professionalModel.find({ _id: id });
    return data;
  } catch (err) {
    console.log(err);
    return 'Error retrieving a professional';
  }
};


const createNewProfessional = async (
  body,
  files
) => {

  const {
    name,
    lastName,
    DNIPasaporte,
    telefono,
    email,
    password,
    category,
    license,
    gender,
    workZone,
    aptitudes,
    timeAvailability,
    description,
    consultPrice,
    bookings,
    gallery,
    comments,
    contact,
    payment,
    hidden
  } = body;

  const newProfessional = {
    name,
    lastName,
    DNIPasaporte,
    telefono,
    email,
    password,
    category,
    license,
    gender,
    workZone,
    aptitudes: JSON.parse(aptitudes),
    timeAvailability,
    description,
    consultPrice,
    bookings: JSON.parse(bookings),
    gallery: JSON.parse(gallery),
    comments: JSON.parse(comments),
    contact,
    payment,
    hidden

  };


  try {
    // traigo datos de las imágenes de storage 
    const dataImage = await storageModel.find({});
    console.log(dataImage);
    if (!!dataImage) {
      // si hay imágenes en storage, las guardo en gallery
      dataImage.map((d) => {
        newProfessional.gallery.push({
          imageId: d.imageId,
          imageUrl: d.imageUrl
        });
      })
      // borro todo el storage
      const data = await storageModel.find({});
      data.map(async (d) => {
        await storageModel.findOneAndDelete({ _id: d._id });
      });
    }
    // creo el profesional
    let data = await professionalModel.create(newProfessional);

    return data;
  } catch (err) {
    console.error(err);

    return ('Error creating professionals: ' + err.message);
  };
};

const updateOneProfessional = async (id, body, files) => {
  const newImages = [];
  const gallery = [];
  // traigo data del professional según el id
  try {
    const data = await professionalModel.find({ _id: id });
    console.log(data[0].gallery);
    data[0].gallery.map((image) => {
      gallery.push(
        {
          imageId: image.imageId,
          imageUrl: image.imageUrl
        }
      )
    })
  } catch (err) {
    //si no hay profesional se termina el proceso
    if (!!files) {
      for (prop in files) {
        // borra las imágenes en carpeta local /storage de este servidor
        fs.unlink(files[prop].tempFilePath);
      }
    }
    return `Error al buscar id: ${id} ${err}`
  }
  // si se encontró un profesional con el id, continúa el proceso
  try {
    if (!!files) {
      // si hay imágenes se cargan a cloudinary y se guarda url en newImages
      // carga imágenes nuevas a cloudinary y a newImages
      for (prop in files) {
        const resultUpload = await uploadImage(files[prop].tempFilePath);
        newImages.push({
          imageId: resultUpload.public_id,
          imageUrl: resultUpload.secure_url
        })
        // borra las imágenes en carpeta local /storage de este servidor
        fs.unlink(files[prop].tempFilePath);
      }
      // carga newImage a gallery
      newImages.map((image) => {
        gallery.push(
          {
            imageId: image.imageId,
            imageUrl: image.imageUrl
          }
        )
      })
      // agrega gallery a body
      body.gallery = gallery;
    }

    // actualiza la base de datos 
    const result = await professionalModel.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    return result;

  } catch (err) {
    console.log(err);
    return 'Error while updating professional: ' + err.message;
  }

};

const deleteOneProfessional = async (id) => {
  try {
    //busca en la base de datos
    const data = await professionalModel.find({ _id: id });
    const gallery = data[0].gallery;
    //borra las imágenes de cloudinary
    gallery.map((image) => {
      deleteImage(image.imageId);
    })
    const result = await professionalModel.findOneAndDelete(
      { _id: id }
    );
    return result;
  } catch (err) {
    console.log(err);
    return 'Error while deleting professional: ' + err.message;
  }
};

module.exports = {
  getAllProfessionals,
  getOneProfessional,
  createNewProfessional,
  updateOneProfessional,
  deleteOneProfessional,
};
