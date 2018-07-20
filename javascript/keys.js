

//Twitter
//https://www.npmjs.com/package/twitter

//Spotify
//https://www.npmjs.com/package/node-spotify-api

//Request
//https://www.npmjs.com/package/request

//DotEnv
//https://www.npmjs.com/package/dotenv


console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

//Spotify
//https://www.npmjs.com/package/node-spotify-api

//Request
//https://www.npmjs.com/package/request

//DotEnv
//https://www.npmjs.com/package/dotenv
