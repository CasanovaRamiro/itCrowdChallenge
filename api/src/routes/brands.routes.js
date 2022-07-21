const {Router} = require('express');
const router = Router();
const {getAllBrands} =require( './controllers/brandsControllers/getBrands')
const {createBrands}=require('./controllers/brandsControllers/createBrands') 

router.get('/', async (req, res) => {
    try {
        const brands = await getAllBrands();
        console.log('i got here!!! very good!')
        res.send(brands)
    } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
    };
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
        console.log('product should be created!!! very good!')
        res.send('product should be created!!! very good!')
    } catch (error) {
        res.status(404).send(`Error ${res.statusCode} ${error}`);
    };
});
module.exports = router;