require('dotenv').config();
const {Products, Brands} = require('../../../db');

//Info de la api.

//Info de la db.
const getAllDb = async () => {
        return await Brands.findAll({});  
};

//Info de la API y Db.
const getAllBrands = async() => {
   const dataDb = await getAllDb();
   return dataDb;
};

module.exports = {
    getAllBrands
};