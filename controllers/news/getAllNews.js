const News = require('../../models/newsModel');
const { createError } = require('../../helpers/createError');

const getAllNews = async (req, res) => {
    const data = await News.find({});

    if (!data) {
        throw createError({
            status: 404,
            message: 'There is no news',
        });
    }

    res.status(200).json(data);
}

module.exports = getAllNews;
