const updateProducts = async ( productToUpdate, id,name,description,image_url,price) => {
    await productToUpdate.set({
        id,
        name,
        description,
        image_url,
        price,
        
    });
    
    return await productToUpdate.save()
};
module.exports = {
    updateProducts
};