const { Products, Brands } = require("../../../db");

const createProducts = async (
  name,
  description,
  image_url,
  price,
  brandName
) => {
  const newProduct = await Products.create({
    name,
    description,
    image_url,
    price,
  });
  let brand = await Brands.findOne({
    where: { name: brandName },
  });
  newProduct.addBrands(brand);
};
module.exports = {
  createProducts,
};
