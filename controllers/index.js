const defaultRouteController = require('./default');
const gameRouteController = require('./game');
const staticFile = require('../appModules/http-utils/static-file');
const voteRouteController = require('./vote');

module.exports = {
    defaultRouteController,
    gameRouteController,
    staticFile,
    voteRouteController
};