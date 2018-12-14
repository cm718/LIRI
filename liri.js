require("dotenv").config();

// Declare the variables for my required dependencies 
let keys = require("./keys");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

// Declare the variables that will hold the user input
let choice = process.argv[2];
let value = process.argv[3];

// Setting up the function for the 4 user search options
function concertThis(value) {
    axios.get(`https://rest.bandsintown.com/artists/${value}/events?app_id=codingbootcamp`).then(
        function (response) {
            const date = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log(`Venue name: ${response.data[0].venue.name}`);
            console.log(`Venue location: ${response.data[0].venue.city}`);
            console.log(`Date: ${date}`);
            console.log(`===================================================================================`);
        }
    );
};

function spotifyThis(value) {
    spotify.search({
            type: 'track',
            query: `${value}`,
            limit: 3
        })
        .then(function (response) {

            let a = response.tracks.items;
            // console.log(a)
            a.forEach(songs => {
                const artist = `Artist(s): ${songs.artists[0].name}`;
                const songName = `Song name: ${songs.name}`;
                const preview = `Preview: ${songs.preview_url}`;
                const albumName = `Album name: ${songs.album.name}`;
                const line = `===================================================================================`;
                console.log(artist)
                console.log(songName);
                console.log(preview)
                console.log(albumName)
                console.log(line)
            });
        });
}

function movieThis(value) {
    // Then run a request with axios to the OMDB API with the movie specified and log the response
    axios.get(`http://www.omdbapi.com/?t=${value}&y=&plot=short&apikey=trilogy`).then(
        function (response) {
            console.log(`Title: ${response.data.Title}`);
            console.log(`Year: ${response.data.Year}`);
            console.log(`IMDB rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomatoes: ${response.data.Ratings[1].Value}`);
            console.log(`Country: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
            console.log(`===================================================================================`);
        }
    );
};

function doWhatItSays() {
    // Use fs to read the random.txt file and run the search
    fs.readFile("random.txt", "utf8", function (error, data) {
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        // We will then run the search
        console.log(data);

        // Then split it by commas (to make it more readable)
        let dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        let choice = dataArr[0];
        let value = dataArr[1];

        function doSearch() {
            if (choice === "concert-this") {
                concertThis(value);
            } else if (choice === "spotify-this-song") {
                spotifyThis(value);
            } else if (choice === "movie-this") {
                movieThis(value);
            }
        }
        doSearch();
    });
};

function liriSearch() {
    if (choice === "concert-this") {
        concertThis(value);
    } else if (choice === "spotify-this-song") {
        if (value){
            spotifyThis(value);
        } else {
            let value = "The sign by ace of base";
            spotifyThis(value);
        }
        
    } else if (choice === "movie-this") {
        movieThis(value);
    } else if (choice === "do-what-it-says") {
        doWhatItSays();
    } else {
        console.log(`===================================================================================`);
        console.log(
            `First type "node liri.js" followed by any of these commands: 
        \n concert-this "the name of an artist who is touring"
        \n spotify-this-song "any song title"
        \n movie-this "any movie title"
        \n "do-what-it-says"
        \n please use quotes around multi-word searches`
        );
        console.log(`===================================================================================`);
    }
};

liriSearch();