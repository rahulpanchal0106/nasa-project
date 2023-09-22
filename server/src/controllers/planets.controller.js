const {planets} = require('../models/planets.model.js');

function getPlanets(req,res){
    res.status(200).json(planets);
    console.log(`Planets served`);
    return;
}

module.exports = {getPlanets};