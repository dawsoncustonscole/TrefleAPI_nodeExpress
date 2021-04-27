const axios = require('axios');

const searchTrefle = async (token, term) => {
    console.log(term);

    const params = {
        token: token,
        q: term,
    };

    let response = await axios.get(
        'https://trefle.io/api/v1/plants/search/',
        params
    );

    console.log(response.data.data.length);

    return response.data.data;
};

searchTrefle().catch((e) => {
    console.log('There has a problem with the GET method: ' + e.message);
});

module.exports = { searchTrefle };
