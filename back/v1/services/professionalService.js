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
    consult,
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
    consult: JSON.parse(consult),
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

const updateOneProfessional = async (id, body) => {
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
    queries,
    comments,
    contact,
    payment,
    hidden
  } = body;

  // Sólo se agregan las propiedades pasadas por body
  const updateProfessional = {}
  if (!!name) {
    updateProfessional.name = name;
  }

  if (!!lastName) {
    updateProfessional.lastName = lastName;
  }

  if (!!DNIPasaporte) {
    updateProfessional.DNIPasaporte = DNIPasaporte;
  }

  if (!!telefono) {
    updateProfessional.telefono = telefono;
  }

  if (!!email) {
    updateProfessional.email = email;
  }

  if (!!password) {
    updateProfessional.password = password;
  }

  if (!!category) {
    updateProfessional.category = category;
  }

  if (!!license) {
    updateProfessional.license = license;
  }

  if (!!gender) {
    updateProfessional.gender = gender;
  }

  if (!!workZone) {
    updateProfessional.workZone = workZone;
  }

  if (!!aptitudes) {
    updateProfessional.aptitudes = JSON.parse(aptitudes);
  }

  if (!!timeAvailability) {
    updateProfessional.timeAvailability = timeAvailability;
  }

  if (!!description) {
    updateProfessional.description = description;
  }

  if (!!consultPrice) {
    updateProfessional.consultPrice = consultPrice;
  }

  if (!!bookings) {
    updateProfessional.bookings = JSON.parse(bookings);
  }

  if (!!gallery) {
    updateProfessional.gallery = JSON.parse(gallery);
  }

  if (!!queries) {
    updateProfessional.queries = JSON.parse(queries);
  }

  if (!!comments) {
    updateProfessional.comments = JSON.parse(comments);
  }

  if (!!contact) {
    updateProfessional.contact = contact;
  }

  if (!!payment) {
    updateProfessional.payment = payment;
  }

  if (!!hidden) {
    updateProfessional.hidden = hidden;
  }

  const oldGallery = [];
  // traigo data del professional según el id
  try {
    const data = await professionalModel.find({ _id: id });
    console.log(data);
    console.log(data[0].gallery);
    data[0].gallery?.map((image) => {
      oldGallery.push(
        {
          imageId: image.imageId,
          imageUrl: image.imageUrl
        }
      )
    })
    if (!!aptitudes && !!data[0].aptitudes) {
      console.log(data[0].aptitudes)
      data[0].aptitudes?.map((aptitud) => {
        updateProfessional.aptitudes.push(aptitud)
      })
    }

    if (!!bookings && !!data[0].bookings) {
      console.log(data[0].bookings)
      data[0].bookings?.map((booking) => {
        updateProfessional.bookings.push(booking)
      })
    }

    if (!!queries && !!data[0].queries) {
      console.log(data[0].queries)
      data[0].queries?.map((query) => {
        updateProfessional.queries.push(query)
      })
    }

    if (!!comments && !!data[0].comments) {
      console.log(data[0].comments)
      data[0].comments?.map((comment) => {
        updateProfessional.comments.push(comment)
      })
    }

  } catch (err) {
    //si no hay profesional se termina el proceso

    // pido todos los datos del storage
    const data = await storageModel.find({});
    // si hay datos en storage se borra todo
    if (!!data) {
      data?.map(async (d) => {
        await storageModel.findOneAndDelete({ _id: d._id });
      });
    }
    console.log(err)
    return `Error al buscar el professional con id: ${id} ${err}`
  }


  // si se encontró un profesional con el id, continúa el proceso
  try {
    // traigo datos de las imágenes de storage 
    const dataImage = await storageModel.find({});
    console.log('dataImage-----------------------')
    console.log(dataImage);
    if (!!dataImage) {
      // si hay imágenes en storage, las guardo en gallery
      dataImage?.map((d, index) => {
        updateProfessional.gallery.push({
          imageId: d.imageId,
          imageUrl: d.imageUrl
        });
      })
      // borro todo el storage
      const data = await storageModel.find({});
      data?.map(async (d) => {
        await storageModel.findOneAndDelete({ _id: d._id });
      });
    }
    // guardo las imágenes que ya había en el profesional
    oldGallery?.map((image, index) => {
      updateProfessional.gallery.push(
        {
          imageId: image.imageId,
          imageUrl: image.imageUrl
        }
      )
    })

  } catch (err) {
    console.log(`Error al buscar datos en storage: ${err}`);
  }

  // actualiza la base de datos 
  try {
    const result = await professionalModel.findOneAndUpdate(
      { _id: id },
      updateProfessional,
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
    gallery?.map((image) => {
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
