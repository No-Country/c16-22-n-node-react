const { categoryModel } = require('../../database/models');

const getAllCategories = async () => {
  const data = await categoryModel.find({});
  return data;
};

const getOneCategory = async (id) => {
  try {
    const data = await categoryModel.find({ _id: id });
    return data;
  } catch (err) {
    console.log(err);
    return 'Error retrieving a category: ' + err.message;
  }
};

const createNewCategory = async (body) => {
  try {
    const {
      category,
      detail,
    } = body;

    const newCategory = {
      category,
      detail,
    };

    const data = await categoryModel.create(newCategory);
    return data;

  } catch (err) {
    console.log(err);
    return 'Error creating category: ' + err.message;
  }

};

const updateOneCategory = async (id, body) => {
  try {
    const result = await categoryModel.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    return result;
  } catch (err) {
    console.log(err);
    return 'Error updating category: ' + err.message;
  }

};

const deleteOneCategory = async (id) => {
  try {
    const result = await categoryModel.findOneAndDelete(
      { _id: id }
    );
    return result;
  } catch (err) {
    console.log(err);
    return 'Error while deleting category: ' + err.message;
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateOneCategory,
  deleteOneCategory,
};


