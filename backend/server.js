const express = require('express');
const trefleAPI = require('./routes/trefle');

const app = express();

app.get('/', (req, res) => {
    res.send('Server running on port 5000');
});

app.get('/api/token', async (req, res) => {
    const value = await trefleAPI.getToken();
    res.json(value);
});

app.listen(5000, console.log('Server running on port 5000'));
