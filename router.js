const router = require('express').Router();
const homeControler = require('./src/controllers/homeControler');
const cubeControler = require('./src/controllers/cubeControler');

router.use(homeControler);
router.use('/cubes', cubeControler);

router.get('*', (req, res)=> {
    res.redirect('/404')
})

module.exports = router;