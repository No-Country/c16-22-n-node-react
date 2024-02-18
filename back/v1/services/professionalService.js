const { professionalModel } = require('../../database/models');

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

const createNewProfessional = async (body) => {
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
      bookings: bookings.map((booking) => {
        return ({
          date: new Date(booking.date),
          place: booking.place,
        })
      }),
      gallery,
      comments: comments.map((comment) => {
        return ({
          user: comment.user,
          body: comment.body,
          date: new Date(comment.date)
        })
      }),
      contact,
      payment,
      hidden
    }

    const data = await professionalModel.create(newProfessional);
    return data;
  } catch (err) {
    console.error(err);
    return ('error creating')
  };
};

const updateOneProfessional = async (id, body) => {
  try {
    const result = await professionalModel.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }

};

const deleteOneProfessional = async (id) => {
  try {
    const result = await professionalModel.findOneAndDelete(
      { _id: id }
    );
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllProfessionals,
  getOneProfessional,
  createNewProfessional,
  updateOneProfessional,
  deleteOneProfessional,
};
