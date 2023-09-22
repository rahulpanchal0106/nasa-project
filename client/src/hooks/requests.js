const API_URL = 'http://localhost:8000';

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}


// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  // const response = await fetch(`${API_URL}/launches`);
  // return await response.json();
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try{
    const response = await fetch(`${API_URL}/launches`,{
      headers:{
        "Content-Type":"application/JSON"
      },
  
      "method":"post",
      "body":JSON.stringify(launch)
    });
    return response;
  }catch(err){
    return {
      ok:false
    }
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch(err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};