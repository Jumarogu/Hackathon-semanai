var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";
var http = require('http');

var spotifyApi = new SpotifyWebApi({
    clientId: 'be2a413e2bbd402db45432d7ccdf0199',
    clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
    redirectUri: 'http://localhost:4200/show-code'
  });

exports.createPlaylist = (req, res) => {
    
    if(req.body.access_token != null) {

        let access_token = req.body.access_token;
        spotifyApi.setAccessToken(access_token);
        var user_info = {};

        spotifyApi.getMe()
            .then(function(data) {

                console.log('Some information about the authenticated user', data.body);
                user_info.id = data.body.id;
                user_info.display_name = data.body.display_name;
                user_info.playlistCode = generateRandomString(8);
                
                MongoClient.connect(uri, function(err, client) {    
                    const playlistCollection = client.db("PWF").collection("playlist");

                    
                    let playlist =  {
                        playlistCode: user_info.playlistCode,
                        user_id: user_info.id,
                        user_name: user_info.display_name,
                        users: [user_info]
                    }

                    playlistCollection.insertOne(playlist, (err, result) => {
                        assert.equal(err, null);
                        
                        console.log("Inserted the object : " + result);
                    });
                    client.close();
                })
                return spotifyApi.getMyTopTracks({limit:50});
            })
            .then((data) => {
                console.log("Top Track: ", data.body.items);

                MongoClient.connect(uri, function(err, client) {
                    const userCollection = client.db("PWF").collection("users");
                    let topTracks = data.body.items

                    user_info.topTracks = topTracks;

                    userCollection.insertOne(user_info, (err, result) => {
                        assert.equal(err, null);
                        
                        console.log("Inserted the object : " + result);
                    });
                    client.close();
                })
                res.status(201).json({'message' : access_token});
            })
            .catch((error)=> {
                console.error(error);
            })
    } else {
        res.status(400).json({'message': 'bad request, no params recibed'});
    }
}

const callback = (result) => {
    console.log('Llegue al callback perros');
}

var generateRandomString = (length) => {
    var code = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return code;
  };