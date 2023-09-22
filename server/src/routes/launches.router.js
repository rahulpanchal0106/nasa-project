const express = require('express');
const launchesRouter = express.Router();
const {launchesController,launchPost} = require('../controllers/launches.controller.js');

launchesRouter.get('/launches',launchesController);
launchesRouter.post('/launches',launchPost);
module.exports = launchesRouter;
