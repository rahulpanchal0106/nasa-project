const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 8000;
const {loadPlanets} = require('./models/planets.model.js');
const server = http.createServer(app);

async function startServer(){
    await loadPlanets();

    server.listen(PORT,()=>{
        console.log(`Server is live at http://localhost:${PORT} ....`);
    });
}

startServer();
