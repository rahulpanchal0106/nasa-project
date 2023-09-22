const launches = new Map();

const launch = {
    flightNo: 100,
    launchDate: new Date('December 12 2030'),
    mission: 'KSE1',
    rocket: 'Explorer IS1',
    target: 'kepler-1652 b',
    customers: ['ISRO','NASA'],
    upcoming:true,
    success:true,
}

launches.set(launch.flightNo,launch);
let flightId=100;
function postLaunches(launch){
    flightId++;
    launches.set(
        flightId,
        Object.assign(launch,{
            flightNo : flightId,
            customers: ['NASA','ISRO'] ,
            upcoming : true,
            success : true,
        })
    );
    return launches;
}


module.exports = {
    launches,
    postLaunches
};