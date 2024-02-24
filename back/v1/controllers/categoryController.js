const categoryService = require("../services/categoryService");

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories();
    // res.send("Get all Categories");
    res.send(allCategories);
};

const getOneCategory = async (req, res) => {
    id = req.params.categoryId
    const category = await categoryService.getOneCategory(id);
    // res.send("Get an existing Category");
    res.send(category);
};

const createNewCategory = async (req, res) => {
    const { body } = req;
    const createdCategory = await categoryService.createNewCategory(body);
    // res.send("Create a new Category");
    res.send(createdCategory);
};

const updateOneCategory = async (req, res) => {
    const id = req.params.categoryId;
    const { body } = req;
    const updatedCategory = await categoryService.updateOneCategory(id, body);
    // res.send("Update an existing Category");
    res.send(updatedCategory);
};

const deleteOneCategory = async (req, res) => {
    const id = req.params.categoryId;
    const deletedCategory = await categoryService.deleteOneCategory(id);
    // res.send("Delete an existing Professional");
    res.send(deletedCategory);
};

module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateOneCategory,
    deleteOneCategory,
};
