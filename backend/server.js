const express = require('express');
const getClientToken = require('./routes/clientToken');
const getTrefleData = require('./routes/trefleData');
const searchTrefle = require('./apis/trefleAPI');

const app = express();
let clientToken;

// Server port and fetch client Trefle JWT token using POST method
app.get('/', async (req, res) => {
    res.send('Server running on port 5000');
    const { data } = await getClientToken.getToken();
    clientToken = data.token;
});

// GET all plants from trefle
// TODO app pagination
app.get('/plants/', async (req, res) => {
    const data = await getTrefleData.allTrefleData(clientToken, req.param.q);
    res.send(data);
});

// Get specific plant using search term in query
app.get('/plants/search/:q', async (req, res) => {
    const data = await searchTrefle.searchTrefle(clientToken, req.params.q);

    res.send(data);
});

//Postgres & Flyway for db

app.listen(5000, console.log('Server running on port 5000'));
