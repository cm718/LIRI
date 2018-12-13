require("dotenv").config();

let keys = require("keys.js");
let spotify = new Spotify(keys.spotify);

// Declare the variables for my required dependencies 
const inquirer = require("inquirer");
const axios = require("axios");
const moment = require("moment");

// Declare the variables that will hold the user input
let choice = process.argv[2];
let value = process.argv[3];

// Setting up the function for the 4 user search options
function concertThis(value) {
    axios.get(`https://rest.bandsintown.com/artists/${value}/events?app_id=codingbootcamp`).then(
        function (response) {
            const date = moment(response.data[0].datetime).format('MM DD YYYY');
            console.log(`Name of the venue: ${response.data[0].venue.name}`);
            console.log(`Venue location: ${response.data[0].venue.city}`);
            console.log(`Date of the event: ${date}`);
            console.log(`===================================================================================`);
        }
    );
};

function spotifyThis(value) {};

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

function doWhatItSays(value) {};



function liriSearch() {
    if (choice === "concert-this") {
        concertThis(value);
    } else if (choice === "spotify-this-song") {
        console.log("spotify working");
        spotifyThis(value);
    } else if (choice === "movie-this") {
        movieThis(value);
    } else if (choice === "do-what-it-says") {
        console.log("do working");
        doWhatItSays(value);
    }
}

liriSearch();