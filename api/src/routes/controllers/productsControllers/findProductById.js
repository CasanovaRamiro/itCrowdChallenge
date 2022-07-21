const { Products, Brands } = require("../../../db");

const findProductById = async (id) => {
  try {
    const productFound = await Products.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Brands,
          attributes: ['name', 'logo_url', 'id'],
          through: {
            attributes: [],
        }
        },
      ],
    });
    return productFound
  } catch (error) {
    return null;
  }
};
module.exports = {
  findProductById,
};
