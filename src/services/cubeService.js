const Cube = require('./../models/Cube')

const cubes = [];

exports.create = async (cubeData) => {
    const cube = await Cube.create(cubeData);
    return cube;
}

exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];

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

exports.singleCubes = (id) => {
    return cubes.find(c => c.id === id)
}