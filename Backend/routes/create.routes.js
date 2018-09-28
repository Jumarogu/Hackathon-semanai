var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";
exports.createPlaylist = (req, res) => {
    
    if(req.body.access_token != null) {
        let access_token = req.body.access_token;
        console.log(access_token);
        var spotifyApi = new SpotifyWebApi({
            clientId: 'be2a413e2bbd402db45432d7ccdf0199',
            clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
            redirectUri: 'http://localhost:4200/show-code'
          });
        spotifyApi.setAccessToken(access_token);
        
        spotifyApi.getMe()
            .then(function(data) {
                console.log('Some information about the authenticated user', data.body);
                
                MongoClient.connect(uri, function(err, client) {

                    const collection = client.db("PWF").collection("playlist");
                    // perform actions on the collection object
                    let obj = {
                        'message': 'Holaaaaa, dbbbb'
                    }
                    collection.insert(obj, (err, result) => {
                        assert.equal(err, null);
                        
                        console.log("Inserted the object : " + result);
                        
                    });
                    client.close();
                });
                
                  res.status(201).json({'message' : access_token});
            }, function(err) {
                console.log('Something went wrong!', err);
            });
    } else {
        res.status(400).json({'message': 'bad request, no params recibed'});
    }
}

const insertPlaylist = (callback) =>{ 
    MongoClient.connect(uri, function(err, client) {

        const collection = client.db("PWF").collection("playlist");
        // perform actions on the collection object
        let obj = {
            'message': 'Holaaaaa, dbbbb'
        }
        collection.insert(obj, (err, result) => {
            assert.equal(err, null);
            
            console.log("Inserted the object");
            callback(result);
        });
        client.close();
    });
}

const callback = (result) => {
    console.log('Llegue al callback perros');
}