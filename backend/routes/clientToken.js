const axios = require('axios');

//TO DO add axios.create method to open connection using revceived key

const getToken = async () => {
    const params = {
        token: '9_oZxBqmEGIMKQJqdyns9ZsrfESdbhlrrkEV-H_hkss',
        origin: 'http://localhost:5000',
    };

    let response = await axios.post('https://trefle.io/api/auth/claim', params);

    console.log(
        '\n',
        'client token = ' + response.data.token,
        '\n',
        '\n',
        'expiration date = ' + response.data.expiration
    );

    return response;
};

getToken().catch((e) => {
    console.log('There has a problem with the POST method: ' + e.message);
});

module.exports = { getToken };
