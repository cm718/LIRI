# LIRI
A Node based SIRI CLI app that makes searches to Spotify, BandsInTown, and OMDB API's.

# To begin just type "node liri" in the command line and hit enter
LIRI will then give you the options for how use the app.

## Search Concerts with Bands In Town
To search for a concert just type "node liri concert-this **any artist who is touring**".
LIRI will then take the search and apply it to the Bands In Town API and return the soonest result for a concert for that artist. 
**Below is an image of a BandsInTown search. I underlined in red how to type the command.**

![liri concert](/images/concert.png)

## Search Songs on Spotify
To search for a song just type "node liri spotify-this-song **any song title**".
LIRI will search the Spotify API and return several relevant results including links to listen to a portion of the song. **Below is an image of a Spotify search. I underlined in red how to type the command.**

![liri spotify](/images/spotify.png)

## Search Movies with OMDB
To search for a movie just type "node liri movie-this **any movie title>".
LIRI will search the Open Movie Database API and return the most relevant movie as well as Rotten Tomatoes score, year, actors, plot and more. **Below is an image of an OMDB search. I underlined in red how to type the command.**

![liri movie](/images/movie.png)

## Search something random
Lastly, if you're not sure what to search for you can simply run: "node liri do-what-it-says".
This will return a random search from the file "random.txt". It could be a movie, concert, or song result. Currently it returns a movie search for Silverado, if you haven't seen it I recommend it. **Below is an image of a random search. I underlined in red how to type the command.**

![liri random](/images/do.png)

## To create LIRI ...
I had to get access to the three API's that were used to power the app; Spotify, BandsInTown, and OMDB. I created a .env file to hide the Spotify keys. These included a Client ID and a Secret Key. These were then called into a keys.js file, which was then required into the main liri.js file. This allows the keys to remain secret even while saving my work publicly to GitHub.

I mention this both so that you know how I got the app to work as well as so that you could run the app yourself if you would like to clone the repository.

To get the random search with the do-what-it-says command I used the core fs package that is native to node. Using this I was able to run a search on a different document in the directory (random.txt). Inside of that file was held a random command and search value. Currently it holds "movie-this,Silverado", but can be updated to hold any of the three searches (movie, song, or concert).

## Also
> If you have any questions about this project or would like to work with me in the future please don't heistate to send me an email: cmmclaughlin7@gmail.com
