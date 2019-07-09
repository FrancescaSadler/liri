# liri

# Requirements 
- Make a Node.js app that functions based off of user input 
- Incorporate Spotify, IMBD API, and BandsInTown API
- Read commands: concert-this, movie-this, spotify-this-song, and do-what-it-says

 # Tech Used
 - Node.js
 - JavaScript
 - Spotify, IMBD, and BandsInTown API

# How it works: 

1. First user chooses one of the following calls with their desire information 
    -concert-this (ex. concert-this Frank Ocean)
    -spotify-this-song (ex. spotify-this-song Forrest Gump)
    -movie-this (ex. movie-this Big)
    -do-what-it-says (reads random.txt file)

2. When one of these commands are inputted, it then calls its respective API
    -concert-this calls the BandsInTown API
    -spotify-this-song calls the Spotify API
    -movie-this calls the IMBD API
    -do-what-it-says reads the external file, random.txt and then executes what is held within that file 

3. Based on what comand is used, the user will get back the following information 
    3.concert-this
        3.Name of the venue
        3. venue location
        3.  date of the Event

    -spotify-this-song 
          * Artist(s)
          * song's name
          * a preview link of the song from Spotify, and the album that the song is from

    -movie-this 
          * Title of the movie.
          * Year the movie came out.
          * IMDB Rating of the movie.
          * Rotten Tomatoes Rating of the movie.
          * Country where the movie was produced.
          * Language of the movie.
          * Plot of the movie.
          * Actors in the movie.

    -do-what-it-says
          * executes the query found in random.txt 


https://drive.google.com/file/d/1Z1aIp1hfdGriEXaGD_SVS7-848yyVy7R/view