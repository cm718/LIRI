# LIRI
A Node based SIRI CLI app that makes searches to Spotify, BandsInTown, and OMDB API's.

## To begin just type "node liri" in the command line and hit enter
LIRI will then be give you the options for how use the app.

To search for a concert just type "node liri concert-this <the name of an artist who is touring>".
LIRI will then take the search and apply it to the Bands In Town API and return the soonest result for a concert for that artist.

To search for a song just type "node liri spotify-this-song <song title>".
LIRI will search the Spotify API and return several relevant results including links to listen to a portion of the song.

To search for a movie just type "node liri movie-this <the title of a movie>".
LIRI will search the Open Movie Database API and return the most relevant movie as well as Rotten Tomatoes score, year, actors, plot and more.

Lastly, if you're not sure what to search for you can simply run: "node liri do-what-it-says".
This will return a random search from the file "random.txt". It could be a movie, concert, or song result.
