const { Router } = require("express");
const router = Router();
const {
  getProducts,
} = require("./controllers/productsControllers/getProducts");
const {
  createProducts,
} = require("./controllers/productsControllers/createProducts");
const {
  updateProducts,
} = require("./controllers/productsControllers/updateProducts");
const {
  findProductById,
} = require("./controllers/productsControllers/findProductById");
const {
    deleteProducts,
  } = require("./controllers/productsControllers/deleteProduct");
 
router.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    console.log("i got here!!! very good!");
    res.send(products);
  } catch (error) {
    res.status(404).send(`Error ${res.statusCode} ${error}`);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await findProductById(id);
    console.log("i got here!!! very good!");
    res.send(products);
  } catch (error) {
    res.status(404).send(`Error ${res.statusCode} ${error}`);
  }
});


router.post("/", async (req, res) => {
  const { name, description, image_url, price, brandName } = req.body;
  try {
    await createProducts(name, description, image_url, price, brandName);
    console.log("product should be created!!! very good!");
    res.send("product should be created!!! very good!");
  } catch (error) {
    res.status(404).send(`Error ${res.statusCode} ${error}`);
  }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let productToUpdate = undefined;
  try {
    productToUpdate = await findProductById(id);
  } catch (error) {
    res.status(404).send(`Error ${res.statusCode} ${error}`);
  }
 
  const { name, description, image_url, price } = req.body;
  if (productToUpdate?.dataValues) {
    try {
      await updateProducts(
        productToUpdate,
        id,
        name,
        description,
        image_url,
        price
      );
      console.log("updated successfully");
      res.send("product was updated!!! very good!");
    } catch (error) {
      res.status(404).send(`Error ${res.statusCode} ${error}`);
    }
  } else {
    res
      .status(404)
      .send(`Error ${res.statusCode} there was no product with that id`);
  }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    let productToDelete = undefined;
    try {
      productToDelete = await findProductById(id);
    } catch (error) {
      res.status(404).send(`Error ${res.statusCode} ${error}`);
    }
    if (productToDelete) {
      try {
        await deleteProducts(
            productToDelete
        );
        console.log("Product deleted successfully");
        res.send("product was deleted!!! very good!");
      } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
      }
    } else {
      res
        .status(404)
        .send(`Error ${res.statusCode} there was no product with that id`);
    }
  });
module.exports = router;
