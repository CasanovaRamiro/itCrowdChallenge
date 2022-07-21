require('dotenv').config();
const {Products, Brands} = require('../../../db');

//Info de la api.

//Info de la db.
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

//Info de la API y Db.
const getProducts = async() => {
   const dataDb = await getAllDb();
   return dataDb;
};

module.exports = {
    getProducts
};