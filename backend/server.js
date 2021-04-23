const express = require('express');
const axios = require('axios');
const trefleAPI = require('./routes/trefle');

const app = express();

app.get('/', async (req, res) => {
    res.send('Server running on port 5000');
});

app.get('/api', async (req, res) => {
    const value = await trefleAPI.getToken();

    console.log(value);

    res.send(value);
});

app.listen(5000, console.log('Server running on port 5000'));
