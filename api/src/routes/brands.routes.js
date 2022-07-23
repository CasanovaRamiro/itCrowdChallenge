const {Router} = require('express');
const router = Router();
const {getAllBrands} =require( './controllers/brandsControllers/getBrands')
const {createBrands}=require('./controllers/brandsControllers/createBrands') 
const {findBrandById}=require('./controllers/brandsControllers/findBrandById')
const {updateBrands}=require('./controllers/brandsControllers/updateBrands')
const {deleteBrand}=require('./controllers/brandsControllers/deleteBrand')

router.get('/', async (req, res) => {
    try {
        const brands = await getAllBrands();
        console.log('i got here!!! very good!')
        res.send(brands)
    } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
    };
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await findBrandById(id);
    console.log("i got here!!! very good!");
    res.send(brand);
  } catch (error) {
    res.status(404).send(`Error ${res.statusCode} ${error}`);
  }
});

router.post('/', async (req, res) => {
    const {
        name,
        logo_url
    } = req.body
    try {
        await createBrands( 
            name,
            logo_url
            )
        console.log('brand should be created!!! very good!')
        res.send('brand should be created!!! very good!')
    } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
    };
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    let brandToUpdate = undefined;
    try {
        brandToUpdate = await findBrandById(id);
    } catch (error) {
      res.status(404).send(`Error ${res.statusCode} ${error}`);
    }
   
    const { name,  logo_url } = req.body;
    if (brandToUpdate?.dataValues) {
      try {
        await updateBrands(
            brandToUpdate,
          id,
          name,
          logo_url,
        );
        console.log("updated successfully");
        res.send("brand was updated!!! very good!");
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
      let brandToDelete = undefined;
      try {
        brandToDelete = await findBrandById(id);
      } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
      }
      if (brandToDelete) {
        try {
          await deleteBrand(
            brandToDelete
          );
          console.log("Brand deleted successfully");
          res.send("brand was deleted!!! very good!");
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