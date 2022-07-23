const updateBrands = async ( brandToUpdate, id,name,logo_url) => {
    await brandToUpdate.set({
        id,
        name,
        logo_url, 
    });
    
    return await brandToUpdate.save()
};
module.exports = {
    updateBrands
};