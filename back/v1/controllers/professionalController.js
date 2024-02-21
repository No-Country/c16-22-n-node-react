const professionalService = require("../services/professionalService");

const getAllProfessionals = async (req, res) => {
  const allProfessionals = await professionalService.getAllProfessionals();
  // res.send("Get all Professionals");
  res.send(allProfessionals);
};

const getOneProfessional = async (req, res) => {
  const id = req.params.professionalId;
  const professional = await professionalService.getOneProfessional(id);
  // res.send("Get an existing Professional");
  res.send(professional);
};

const createNewProfessional = async (req, res) => {
  const { body } = req
  const createdProfessional = await professionalService.createNewProfessional(body);
  // console.log(createdProfessional)
  res.send(createdProfessional);
  // res.send("Create a new Professional");
};

const updateOneProfessional = async (req, res) => {
  id = req.params.professionalId
  const { body } = req;
  const updatedProfessional = await professionalService.updateOneProfessional(id, body);
  // res.send("Update an existing Professional");
  res.send(updatedProfessional)
};

const deleteOneProfessional = async (req, res) => {
  const id = req.params.professionalId;
  const deletedProfessional = await professionalService.deleteOneProfessional(id);
  // res.send("Delete an existing Professional");
  res.send(deletedProfessional);
};

module.exports = {
  getAllProfessionals,
  getOneProfessional,
  createNewProfessional,
  updateOneProfessional,
  deleteOneProfessional,
};
