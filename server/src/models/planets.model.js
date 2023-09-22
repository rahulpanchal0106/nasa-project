const fs = require('fs');
const path = require('path');
const {parse} = require('csv-parse');
const arr = [];

function isHabitable(planet){
   
    return planet['koi_disposition']==='CONFIRMED'
    && planet['koi_insol']>0.36 && planet['koi_insol']<1.11
    && planet['koi_prad']<1.6;
}


function loadPlanets(){
    return new Promise((resolve,reject)=>{
        fs.createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))
        .pipe(parse({
            comment : '#',
            columns : true
        }))
        .on('data',(data)=>{
            if(isHabitable(data)){
                arr.push(data);
            }
        })
        .on('error',(err)=>{
            console.log("⭕"+err);
            reject(err);
        })
        .on('end',()=>{
            if(arr.length!=0){
                console.log(`🟢 ${arr.length} Habitable planets found! \n`);
                let i=0;
                arr.map(planet=>{
                    i++;
                    console.log(` ${i}. ${planet.kepler_name}`)
                    
                })
                resolve();
            
            }else{
                console.log(`🔴 No Habitable planet found`)
            }
            console.log("  \n~~~~~~");
        });
    });
}




module.exports = {
    loadPlanets,
    planets: arr
};