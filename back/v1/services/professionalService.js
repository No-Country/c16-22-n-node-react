const { professionalModel } = require('../../database/models');
const { uploadImage, deleteImage } = require('../../utils/cloudinary')
const fs = require('fs-extra');


const getAllProfessionals = async () => {
  const data = await professionalModel.find({});
  return data;
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



const createNewProfessional = async (body, files) => {
  try {
    const {
      name,
      lastName,
      company,
      email,
      password,
      category,
      validations,
      description,
      pricePerHour,
      timeAvailability,
      geographicAvailability,
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
      company,
      email,
      password,
      category,
      validations,
      description,
      pricePerHour,
      timeAvailability,
      geographicAvailability,
      bookings: JSON.parse(bookings),
      gallery: JSON.parse(gallery),
      comments: JSON.parse(comments),
      contact,
      payment,
      hidden
    };
    let data = await professionalModel.create(newProfessional);
    if (!!files) {
      // si hay imágenes se actualiza gallery del profesional 
      data = updateOneProfessional(data._id, {}, files);
    }
    return data;
  } catch (err) {
    console.error(err);
    //si no hay profesional se termina el proceso
    if (!!files) {
      for (prop in files) {
        // borra las imágenes en carpeta local /storage de este servidor
        fs.unlink(files[prop].tempFilePath);
      }
    }
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
