// require("dotenv").config();

// let keys = require("keys.js");
// let spotify = new Spotify(keys.spotify);

let inquirer = require("inquirer");

let choice = process.argv[2];
console.log(choice);
let value = process.argv[3];
console.log(value);

function concertThis(value) {};

function spotifyThis(value) {};

function movieThis(value) {};

function doWhatItSays(value) {};



function liriSearch() {
    if (choice === "concert-this") {
        console.log("concert working");
        concertThis(value);
    }
    else if (choice === "spotify-this-song") {
        console.log("spotify working");
        spotifyThis(value);
    }
    else if (choice === "movie-this") {
        console.log("movie working");
        movieThis(value);
    }
    else if (choice === "do-what-it-says") {
        console.log("do working");
        doWhatItSays(value);
    }
}

liriSearch();
