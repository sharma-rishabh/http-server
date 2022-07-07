const { startServer } = require('./src/server.js');
const { createRouter } = require('./src/router.js');
const { addTimeStamp } = require('./src/handlers/addTimeStamp.js');
const { createStaticFileServer } = require('./src/handlers/staticFileHandler.js');
const { parseCookies } = require('./src/handlers/parseCookies.js');
const { createInjectSession } = require('./src/handlers/createInjectSession.js');
const { injectBody } = require('./src/handlers/injectBody.js');
const { parseBodyUrl } = require('./src/handlers/parseBodyUrl.js');
const { logRequest } = require('./src/handlers/logRequestHandler.js');

module.exports = {
  startServer,
  createRouter,
  addTimeStamp,
  createStaticFileServer,
  parseCookies,
  createInjectSession,
  injectBody,
  parseBodyUrl,
  logRequest
};
