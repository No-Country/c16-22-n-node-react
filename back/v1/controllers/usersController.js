const asyncHandler = require("express-async-handler");
const usersService = require("../services/usersService");
const User = require("../../database/models").userModel;
const generateToken = require('../../config/generateToken');
const { json } = require("body-parser");
const { stringify } = require("querystring");

const getAllUsers = asyncHandler (async (req, res) => {
  // const allUsers = usersService.getAllUsers();
  // res.send({status: "OK", data: {}});
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id }});
  console.log(users)
  res.status(200).send(users);
});

const getOneUser = (req, res) => {
  const user = usersService.getOneUser();
  res.send("Get an existing User");
};

const createNewUser = asyncHandler( async(req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const createdUser = await usersService.createNewUser({
    name,
    email,
    password,
    pic
  });

  if(!createdUser) {
    res.status(400);
    throw new Error("Failed to create the user");
  }

  res.status(201).send({ status: "OK", data: createdUser });
});

const updateOneUser = (req, res) => {
  const updatedUser = usersService.updateOneUser();
  res.send("Update an existing User");
};

const deleteOneUser = (req, res) => {
  const deletedUser = usersService.deleteOneUser();
  res.send("Delete an existing User");
};

const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne( { email } );

  if(user && (await user.matchPassword(password))) {
    res.send({
      ...user,
      token: generateToken(user._id)
    })
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password")
  }
});

// const searchUser = async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { name: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const users = (await User.find(keyword)).findIndex({
//     _id: { $ne: req.user._id },
//   });
//   res.send(users);
// };

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  authenticateUser
};
