const generateToken = require("../../config/generateToken");
const professionalService = require("../services/professionalService");
const Professional = require("../../database/models").professionalModel;

const getAllProfessionals = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { aptitudes: { $regex: req.query.search, $options: "i" } },
          { description: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  if (keyword) {
    const professionalsSearch = await Professional.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(professionalsSearch);
  } else {
    const allProfessionals = await professionalService.getAllProfessionals();
    res.send(allProfessionals);
  }
};

// const getAllProfessionals = async (req, res) => {
//   // const allUsers = usersService.getAllUsers();
//   // res.send({status: "OK", data: {}});
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { aptitudes: { $regex: req.query.search, $options: "i" } },
//           { description: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const professionals = await Professional.find(keyword).find({ _id: { $ne: req.user._id } });
//   // console.log(users)
//   res.status(200).send(professionals);
// };

const getOneProfessional = async (req, res) => {
  const id = req.params.professionalId;
  const professional = await professionalService.getOneProfessional(id);
  // res.send("Get an existing Professional");
  res.send(professional);
};

const createNewProfessional = async (req, res) => {
  const { body, files } = req;
  const createdProfessional = await professionalService.createNewProfessional(body, files);
  res.send(createdProfessional);
  // res.send("Create a new Professional");
};

const updateOneProfessional = async (req, res) => {
  id = req.params.professionalId;
  const { body, files } = req;
  const updatedProfessional = await professionalService.updateOneProfessional(id, body, files);
  // res.send("Update an existing Professional");
  res.send(updatedProfessional);
};

const deleteOneProfessional = async (req, res) => {
  const id = req.params.professionalId;
  const deletedProfessional = await professionalService.deleteOneProfessional(id);
  // res.send("Delete an existing Professional");
  res.send(deletedProfessional);
};

const authenticateProfessional = async (req, res) => {
  const {email, password} = req.body;

  const professional = await Professional.findOne({email});

  if(professional && (await professional.matchPassword(password))) {
    res.send({
      ...user,
      token: generateToken(professional._id)
    })
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password")
  }
}

module.exports = {
  getAllProfessionals,
  getOneProfessional,
  createNewProfessional,
  updateOneProfessional,
  deleteOneProfessional,
  authenticateProfessional
};
