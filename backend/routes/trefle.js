const axios = require('axios');

//THIS RETURNS PENDING PROMISE

const getToken = async () => {
    const params = {
        token: '9_oZxBqmEGIMKQJqdyns9ZsrfESdbhlrrkEV-H_hkss',
        origin: 'http://localhost:5000',
    };

    const response = await axios.post(
        'https://trefle.io/api/auth/claim',
        params
    );

    console.log('token requested from trefle.js');
    return response.data;
};

module.exports = { getToken };
