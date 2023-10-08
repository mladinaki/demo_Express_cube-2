const uniqid = require('uniqid');

const cubes = [];

exports.create = (cubeData) => {
    const id = uniqid();
    const newCube = {
        id,
        ...cubeData
    }
    cubes.push(newCube);
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