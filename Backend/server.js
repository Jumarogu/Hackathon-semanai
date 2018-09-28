var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var SpotifyWebApi = require('spotify-web-api-node');

var create_routes = require('./routes/create.routes');
var join_routes = require('./routes/join.routes');

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(cors());
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CreatePlaylist actions

router.post('/api/create', create_routes.createPlaylist);
router.get('/api/playlist', join_routes.getPlaylist);
router.post('/api/join', join_routes.joinPlaylist);
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