require('dotenv').config();
const {Brands} = require('../../../db');

const getAllDb = async () => {
        return await Brands.findAll({});  
};

const getAllBrands = async() => {
   const dataDb = await getAllDb();
   return dataDb;
};

module.exports = {
    getAllBrands
};