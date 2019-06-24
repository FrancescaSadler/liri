require("dotenv").config();
const axios = require('axios');

//to read/write a file 
var fs = require("fs");

//any input
var operator = process.argv[2];
var action = process.argv[3];

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

switch (operator) {
    case "do-what-it-says":
        console.log("execute do what it says")
        doWhat();
        break;
    case "movie-this":
        console.log("movie works")
        break;
    case "spotify-this-song":
        song();
        console.log("spotify works")
        break;
    case "concert-this":
        concertThis();
        console.log("concert works")
        break;
    default:
        console.log("Choose correct operator");
}

//Requirements
//1. node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")


//axios call to retireve info 
// read and write file? 
// need to use moment.js to get format of date 

//finds artist specified
function concertThis() {
    var queryUrl = "https://rest.bandsintown.com/artists/" + action + "/events?app_id=codingbootcamp";
    console.log(queryUrl);


    axios.get(queryUrl).then(
        function (response) {
            // console log out desired info
            console.log(response.data[0].venue.name);
        })
        //for package 
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};


//Requirements
//2. node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window:
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

function song() {
    if (!action) {
        console.log("action is false");
        action = "The Sign by the Ace of Base"
    }

    spotify.search({ type: 'track', query: action }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("The artist(s) name is " + data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
    });
}


//Requirements
//3.node liri.js movie-this '<movie name here>'

//  This will output the following information to your terminal/bash window:
//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.

// var queryUrl = "http://www.omdbapi.com/?t=" + action + "&y=&plot=short&apikey=trilogy";
// console.log(queryUrl);

// //ASK difference between package and no package? 
// axios.get(queryUrl).then(
// function(response) {
//   // console log out desired info 
//   console.log(response.data);
// })
// //for package 
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });


//4. node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.

function doWhat () {
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);

        var arr = data.split (", ")
        operator = arr[0];
        action = arr[1];
        console.log(arr);

        switch (operator) {
            case "do-what-it-says":
                console.log("execute do what it says")
                doWhat();
                break;
            case "movie-this":
                console.log("movie works")
                break;
            case "spotify-this-song":
                song();
                console.log("spotify works")
                break;
            case "concert-this":
                concertThis();
                console.log("concert works")
                break;
            default:
                console.log("Choose correct operator");
        }
    });   
   
}
