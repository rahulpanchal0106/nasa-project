const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const planetsRouter = require('./routes/planets.router.js');
const launchesRouter = require('./routes/launches.router.js');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));

app.use(planetsRouter);
app.use(launchesRouter);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html')); 
    console.log(`Home page served`); 
});




module.exports = app; 