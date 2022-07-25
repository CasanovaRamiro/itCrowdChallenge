const {Brands} = require('../../../db');
const updateProducts = async ( productToUpdate, id,name,description,image_url,price, brandName) => {
    await productToUpdate.set({
        id,
        name,
        description,
        image_url,
        price,
        
    });
    const brandToUpdate = await Brands.findAll({where:{name:brandName}})
    productToUpdate.setBrands(brandToUpdate)
    return await productToUpdate.save()
};
module.exports = {
    updateProducts
};