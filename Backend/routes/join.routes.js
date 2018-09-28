var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";

var spotifyApi = new SpotifyWebApi({
    clientId: 'be2a413e2bbd402db45432d7ccdf0199',
    clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
    redirectUri: 'http://localhost:4200/show-code'
  });

exports.joinPlaylist = (req, res) => {

}

exports.getPlaylist = (req, res) => {
    
}