'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=agnddpc62mkv02tllq39qastam'
    + '&client_secret=8pm61e8o0ake1ic17bc06op87p'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://tetateuta.github.io/meetup22/'
    + '&code=b89117d55ede56544ccead810f4e3dab';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=agnddpc62mkv02tllq39qastam'
    + '&client_secret=8pm61e8o0ake1ic17bc06op87p'
    + '&grant_type=refresh_token'
    + '&redirect_uri=https://tetateuta.github.io/meetup22/'
    + '&refresh_token=b89117d55ede56544ccead810f4e3dab';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};