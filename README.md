# LIRI Node App
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## APIs used
- Twitter
- Spotify
- OMDB

## How to run
You need to create an .env file with the fields
- SPOTIFY_ID
- SPOTIFY_SECRET
- TWITTER_CONSUMER_KEY
- TWITTER_CONSUMER_SECRET
- TWITTER_ACCESS_TOKEN_KEY
- TWITTER_ACCESS_TOKEN_SECRET

## Commands to run
1. `node liri.js my-tweets`
    - This will show your last 20 tweets and when they were created at in your terminal/bash window.
2. `node liri.js spotify-this-song '<song name here>'`
    - This will show the information about the songs in your terminal/bash window
3. `node liri.js movie-this '<movie name here>'`
    - This will output information on the movie to your terminal/bash window
4. `node liri.js do-what-it-says`
    - This will do the command that is specified in the random.txt file and output to your terminal/bash window
    
## Logging
All commands are logged to a log.txt file that is created    