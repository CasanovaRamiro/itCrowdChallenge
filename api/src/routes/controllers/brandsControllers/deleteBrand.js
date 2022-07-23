const deleteBrand = async ( brandToDelete) => {
    await brandToDelete.destroy()
};
module.exports = {
    deleteBrand
};