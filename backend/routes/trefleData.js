const axios = require('axios');

const allTrefleData = async (token, q) => {
    const options = {
        params: {
            token: token,
            q: q,
        },
    };

    let response = await axios.get('https://trefle.io/api/v1/plants', options);

    console.log(response.data.data.length);

    return response.data.data;
};

allTrefleData().catch((e) => {
    console.log('There has a problem with the GET method: ' + e.message);
});

module.exports = { allTrefleData };
