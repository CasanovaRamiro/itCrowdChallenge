const deleteProducts = async ( productToDelete) => {
    await productToDelete.destroy()
};
module.exports = {
    deleteProducts
};