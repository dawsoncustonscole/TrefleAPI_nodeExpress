const axios = require('axios');

const getToken = async () => {
    const params = {
        token: '9_oZxBqmEGIMKQJqdyns9ZsrfESdbhlrrkEV-H_hkss',
        origin: 'http://localhost:5000',
    };

    const response = await axios
        .post('https://trefle.io/api/auth/claim', params)
        .catch((error) => {
            console.log('error', error.response);
        });

    console.log('token requested from trefle.js');
    return response.data.token;
};

//TO DO add axios.create method to open connection using revceived key

const getData = async (token, term) => {
    const response = await axios
        .get('https://trefle.io/api/v1/plants/search', {
            params: {
                token: token,
                q: term,
            },
        })
        .catch((error) => {
            console.log('error', error.response);
        });

    return response.data.data;
};

module.exports = { getToken, getData };
