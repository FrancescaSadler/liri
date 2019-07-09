# liri
# Requirements | # Tech Used
------------ | -------------
1. Make a Node.js app that functions based off of user input | 1. Node.js
2. Incorporate Spotify, IMBD API, and BandsInTown API| 2. JavaScript
3. Read commands: concert-this, movie-this, spotify-this-song, and do-what-it-says | 3.Spotify, IMBD, and BandsInTown API

# How it works: 


Code Explanation
Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
What our app does depends on what the user types, and there are 4 main functions: (1) prints latest tweets, (2) Spotify lookup for a song, (3) OMDb lookup for a movie, and (4) read command and query from another file
The program makes a request to the Twitter API that is limited by parameters -- username and number of tweets, and we get back a JSON object that includes an array of the 20 most recent tweets; from there, we selectively output using console.log
The program also makes a request to the Spotify API, and we get back a JSON object that includes everything we need (artist(s), song, preview link, and album)
The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)
The program also reads from a file called "random.text" and executes the command and query found there using string and array methods
Appropriate comments and error-checking has been added
https://drive.google.com/file/d/1Z1aIp1hfdGriEXaGD_SVS7-848yyVy7R/view