const { newsModel } = require('../../database/models');

const getAllNews = async () => {
    try {
        const data = await newsModel.find({});
        return data;
    } catch (e) { return 'Error retrieving news' + e.message }

};

const getOneNews = async (id) => {
    try {
        const data = await newsModel.find({ _id: id });
        return data;
    } catch (e) { return 'Error retrieving a one news' + e.message }
};

const createNewNews = async (body, files) => {
    try {
        const { news, urlImage } = body;
        const newNews = {
            news: JSON.parse(news),
            urlImage,
        }
        const data = await newsModel.create(newNews);
        return data;

    } catch (e) {
        return ('Error creating news: ' + e.message);
    }
};

const updateOneNews = async (id, body, files) => {
    try {
        const { news, urlImage } = body;
        const newNews = {
            news: JSON.parse(news),
            urlImage,
        }
        const data = await newsModel.findOneAndUpdate(
            { _id: id },
            newNews,
            { new: true }
        );
        return data;

    } catch (e) {
        return ('Error creating news: ' + e.message);
    }
};

const deleteOneNews = async (id) => {
    try {
        const result = await newsModel.findOneAndDelete(
            { _id: id }
        );
        return result;
    } catch (err) {
        console.log(err);
        return 'Error while deleting news: ' + err.message;
    }
};

module.exports = {
    getAllNews,
    getOneNews,
    createNewNews,
    updateOneNews,
    deleteOneNews,
};
