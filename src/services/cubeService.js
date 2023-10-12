const Cube = require('./../models/Cube')

// const cubes = [];

exports.create = async (cubeData) => {
    const cube = await Cube.create(cubeData);
    return cube;
}

exports.getAll = async (search, from, to) => {
    let filterCubes = await Cube.find().lean();

    if (search) {
        filterCubes = filterCubes.filter((cube) => cube.name.toLowerCase().includes(search))
    }

    if (from) {
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel >= Number(from))

    }

    if (to) {
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel <= Number(to))
    }
    return filterCubes
}

exports.singleCubes = (id) => Cube.findById(id);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await this.singleCubes(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();

}
