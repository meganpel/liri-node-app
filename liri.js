require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');

var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var args = process.argv.slice(2);

switch (args[0]) {
    case "my-tweets":
        apiTwitter();

        break;
    case "spotify-this-song":
        var songName = args[1];
        if (args[1] === undefined) {
            songName = "The Sign";
        }

        apiSpotify(songName);

        break;
    case "movie-this":
        var movieName = args[1];
        if (args[1] === undefined) {
            movieName = "Mr. Nobody";
        }

        apiMovie(movieName);

        break;
    case "do-what-it-says":

        fs.readFile('random.txt', function(err, data) {
            if (err) {
                console.log("Error reading the file!");
            }

            var args = data.toString().split(",");

            if (args[0] === "my-tweets") {
                apiTwitter();
            } else if (args[0] === "spotify-this-song") {
                apiSpotify(args[1]);
            } else if (args[0] === "movie-this") {
                apiMovie(args[1]);
            }
        });

        break;
}

fs.appendFile('log.txt', args + "\n", function(err) {
    if (err) {
        return console.error(err);
    }
});

function apiTwitter() {
    client.get('statuses/user_timeline', { screen_name: 'mpz0719', count: 20 }, function(error, tweets, response) {
        if (error) {
            console.log("Error pulling tweets!");
            return;
        }

        tweets.forEach(function (tweet, index) {
            console.log("-----------------------------------------------------------------");
            console.log(tweet.text);
            console.log(" - Created: " + tweet.created_at);

            if (index + 1 === tweets.length) {
                console.log("-----------------------------------------------------------------");
            }
        });
    });
}

function apiSpotify(songName) {
    spotify.search({type: 'track', query: songName}, function(err, data) {
        if (err) {
            console.log("Error pulling songs!");
            return;
        }

        if (data.tracks.total === 0) {
            console.log("No tracks found!")
        }

        data.tracks.items.forEach(function (song, index) {
            var artists = [];
            for (var i = 0; i < song.artists.length; i++) {
                artists.push(song.artists[i].name);
            }

            console.log("-----------------------------------------------------------------");
            console.log("Artist(s): " + artists);
            console.log("Name: " + song.name);
            console.log("Link: " + song.external_urls.spotify);
            console.log("Album: " + song.album.name);

            if (index + 1 === data.tracks.items.length) {
                console.log("-----------------------------------------------------------------");
            }
        });
    });
}

function apiMovie(movieName) {
    request('http://www.omdbapi.com/?apikey=trilogy&t=' + movieName, function (error, response, body) {
        if (error) {
            console.log("Error pulling movie!");
            return;
        }

        var movie = JSON.parse(body);

        var imdbRating = 0;
        var rottenTomatoesRating = 0;

        for (var i = 0; i < movie.Ratings.length; i++) {
            if (movie.Ratings[i].Source === "Internet Movie Database") {
                imdbRating = movie.Ratings[i].Value;
            }
            if (movie.Ratings[i].Source === "Rotten Tomatoes") {
                rottenTomatoesRating = movie.Ratings[i].Value;
            }
        }

        console.log("-----------------------------------------------------------------");
        console.log("Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("IMDB Rating: " + imdbRating);
        console.log("Rotten Tomatoes Rating: " + rottenTomatoesRating);
        console.log("Country: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        console.log("-----------------------------------------------------------------");
    });
}