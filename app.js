const http = require('http');
const path = require('path');
// const mainRouteController = require('./controllers/main');
const {
    defaultRouteController,
    gameRouteController,
    staticFile,
    voteRouteController
} = require('./controllers/index');
const { getData, endpoints } = require('./appModules/api');
const { makeRatingFile, config } = require('./appModules/rating');

const PORT = 3005;

const server = http.createServer(async(req, res) => {
    const url = req.url;
    switch (url) {
        case '/':
            // mainRouteController(res, '/index.html', 'html');
            const data = await getData(endpoints.games);
            makeRatingFile(config.PATH_TO_RATING_FILE, data)
            res.statusCode = 200;
            staticFile(res, "/index.html", ".html");
            break;
        case '/game':
            gameRouteController(res);
            break;
        case '/vote':
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
            break;
    }
});

server.listen(PORT);