const {launches,postLaunches} = require('../models/launches.model.js');

function launchesController(req,res){
    
    res.status(200).json(Array.from(launches.values()));
    console.log(`Upcoming launches served......\n`);
    return;
}

function launchPost(req,res){
    const launch=req.body;
    postLaunches(launch);

    launch.date = new Date(launch.launchDate);
    if(isNaN(launch.date)){
        return res.status(400).json({
            error:"Date is invalid"
        });
    }
    if(!launch.launchDate || !launch.mission || ! launch.rocket || !launch.target){
        return res.status(400).json({
            error:'Something is missing, please fill it up!'
        })
    }

    res.status(201).json(launch);
    console.log(`post launches -Controller Sucessfully 🟢`);
    return;
}

module.exports = {
    launchesController,
    launchPost
};