const categoryService = require("../services/categoryService");

const getAllCategories = (req, res) => {
    const allCategories = categoryService.getAllCategories();
    res.send("Get all Categories");
};

const getOneCategory = (req, res) => {
    const category = categoryService.getOneCategory();
    res.send("Get an existing Category");
};

const createNewCategory = (req, res) => {
    const createdCategory = categoryService.createNewCategory();
    res.send("Create a new Category");
};

const updateOneCategory = (req, res) => {
    const updatedCategory = categoryService.updateOneCategory();
    res.send("Update an existing Category");
};

const deleteOneCategory = (req, res) => {
    const deletedCategory = categoryService.deleteOneCategory();
    res.send("Delete an existing Category");
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateOneCategory,
  deleteOneCategory,
};
