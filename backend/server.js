const express = require('express');
const trefleAPI = require('./routes/trefle');

const app = express();

app.get('/', (req, res) => {
    res.send('Server running on port 5000');
});

app.get('/plants', async (req, res) => {
    const value = await trefleAPI.getToken();
    const data = await trefleAPI.getData(value, 'Rose');
    res.send(data);
});

app.listen(5000, console.log('Server running on port 5000'));
