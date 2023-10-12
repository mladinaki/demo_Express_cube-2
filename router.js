const router = require('express').Router();
const homeControler = require('./src/controllers/homeControler');
const cubeControler = require('./src/controllers/cubeControler');
const accessoriesControler = require('./src/controllers/accessoryControler');
const usersControler = require('./src/controllers/userControler')

router.use(homeControler);
router.use('/cubes', cubeControler);
router.use('/accessories',accessoriesControler);
router.use('/users', usersControler);

router.get('*', (req, res)=> {
    res.redirect('/404')
})

module.exports = router;