const Accessory = require('./../models/accessory');


exports.create = (dataAccessory) => Accessory.create(dataAccessory);

exports.getAll = () => Accessory.find();

