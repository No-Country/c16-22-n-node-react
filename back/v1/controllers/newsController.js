const newsService = require("../services/newsService");

const getAllNews = async (req, res) => {
    const allNews = await newsService.getAllNews();
    // res.send("Get all News");
    res.send(allNews);
};

const getOneNews = async (req, res) => {
    const id = req.params.newsId;
    const news = await newsService.getOneNews(id);
    // res.send("Get an existing News");
    res.send(news);
};

const createNewNews = async (req, res) => {
    const { body, files } = req;
    const createdNews = await newsService.createNewNews(body, files);
    res.send(createdNews);
    // res.send("Create a new News");
};

const updateOneNews = async (req, res) => {
    id = req.params.newsId;
    const { body, files } = req;
    const updatedNews = await newsService.updateOneNews(id, body, files);
    // res.send("Update an existing News");
    res.send(updatedNews);
};

const deleteOneNews = async (req, res) => {
    const id = req.params.newsId;
    const deletedNews = await newsService.deleteOneNews(id);
    // res.send("Delete an existing News");
    res.send(deletedNews);
};

module.exports = {
    getAllNews,
    getOneNews,
    createNewNews,
    updateOneNews,
    deleteOneNews,
};
