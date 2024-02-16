const professionalService = require("../services/professionalService");
const getAllProfessionals = (req, res) => {
    const allProfessionals = professionalService.getAllProfessionals();
    res.send("Get all Professionals");
};

const getOneProfessional = (req, res) => {
  const professional = professionalService.getOneProfessional();
    res.send("Get an existing Professional");
};

const createNewProfessional = (req, res) => {
    const createdProfessional = professionalService.createNewProfessional();
  res.send("Create a new Professional");
};

const updateOneProfessional = (req, res) => {
    const updatedProfessional = professionalService.updateOneProfessional();
  res.send("Update an existing Professional");
};

const deleteOneProfessional = (req, res) => {
    const deletedProfessional = professionalService.deleteOneProfessional();
  res.send("Delete an existing Professional");
};

module.exports = {
  getAllProfessionals,
  getOneProfessional,
  createNewProfessional,
  updateOneProfessional,
  deleteOneProfessional,
};
