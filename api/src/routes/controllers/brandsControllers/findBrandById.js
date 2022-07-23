const { Brands } = require("../../../db");

const findBrandById = async (id) => {
  try {
    const brandFound = await Brands.findOne({
      where: {
        id,
      },
    });
    return brandFound;
  } catch (error) {
    return null;
  }
};
module.exports = {
  findBrandById,
};
