require('dotenv').config();
const {Products, Brands} = require('../../../db');

const getAllDb = async () => {
        return await Products.findAll({
            include: {
                model: Brands,
                attributes: ['name', 'logo_url', 'id'],
                through: {
                    attributes: [],
                }
            }
        });  
};

const getProducts = async() => {
   const dataDb = await getAllDb();
   return dataDb;
};

module.exports = {
    getProducts
};