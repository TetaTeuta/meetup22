'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=agnddpc62mkv02tllq39qastam'
    + '&client_secret=8pm61e8o0ake1ic17bc06op87p'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://tetateuta.github.io/meetup22/'
    + '&code=d8ba7886d3c4115d32fdeafff50abf4e';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
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
    + '&refresh_token=2e0dee5b2cd1ae952ebe5f8e298cb08a';

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