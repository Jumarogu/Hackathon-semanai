var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var SpotifyWebApi = require('spotify-web-api-node');

var create_routes = require('./routes/create.routes');

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(cors());
pp.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CreatePlaylist actions

router.get('/api/hi', create_routes.sayHi);
// create playlist POST 
// add user to playlist
// save user on db
// get users preferences
// top songs
// top artists
// last saved songs -> genres from artist
// last albums saved -> genres from artist
// preferences.save()
//

// JoinPlaylist actions

// GetPlaylist actions

app.use('/', router);

app.listen(port);
console.log('server running on port ' + port);