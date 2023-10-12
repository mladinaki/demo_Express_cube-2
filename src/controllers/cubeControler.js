const router = require('express').Router();
const cubServices = require('../services/cubeService');
const acccessoryServices = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('cube/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubServices.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });
    res.redirect('/');
})

router.get('/:cubeId/details', async (req, res) => {
    const { cubeId } = req.params;
    const cube = await cubServices.singleCubes(cubeId).lean();

    if (!cube) {
        res.redirect('/404');
        return
    }
    // const accessories = cube.accessories
    res.render('cube/details', { ...cube });
});

//Cubeaccessory Controler attachmand

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const { cubeId } = req.params;
    const cube = await cubServices.singleCubes(cubeId).lean();
    const accessories = await acccessoryServices.getAll().lean();
    const hasAccessories = accessories.length > 0;//View data,template data

    res.render('accessory/attach', { ...cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { cubeId } = req.params;
    const { accessory: accessoryId } = req.body;
    await cubServices.attachAccessory(cubeId, accessoryId)
    res.redirect(`/cubes/${cubeId}/details`);
})

module.exports = router