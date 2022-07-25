require('dotenv').config();
const {Brands} = require('../../../db');

const createBrands = async (name, logo_url) => {
    await Brands.create({
        name,
        logo_url
    });
};
module.exports = {
    createBrands
};