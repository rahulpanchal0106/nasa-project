const express = require('express');
const planetsRouter = express.Router();
const {getPlanets} = require('../controllers/planets.controller.js');

planetsRouter.get('/planets',getPlanets);

module.exports = planetsRouter;