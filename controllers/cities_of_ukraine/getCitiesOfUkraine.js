const CitiesOfUkraine = require('../../models/citiesOfUkraineModel');
const { createError } = require('../../helpers/createError');
// const fs = require('fs/promises');
// const path = require('path');

// const citiesOfUkraine = path.resolve('./assets/cities_of_ukraine.json');

const getCitiesOfUkraine = async (req, res) => {
    const data = await CitiesOfUkraine.find({})

    if (!data) {
        throw createError({
            status: 404,
            message: 'There is no cities of Ukraine',
        });
    }

    res.status(200).json(data);

    // try {
    //     const data = await fs.readFile(citiesOfUkraine, 'utf8');
    //     res.status(200).json(JSON.parse(data));
    // }
    // catch (error) {
    //     res.status(404).json({ message: 'Not found', error });
    // }
}

module.exports = getCitiesOfUkraine;
