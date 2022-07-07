# Installation 
`npm install https://github.com/sharma-rishabh/http-server`

# Usage

```js
// Import startServer and createRouter.
const {startServer,createRouter}=require('http-server');

// Pass your handlers list to create router and get a router back.

const router=createRouter([handlers...]);

// Pass a port and the router you created to startServer.

startServer(port,router);

// Voila! your server is ready to serve.

```

# Handler's Contract

```js 
// Handlers take three arguments the last one being optional
fileHandler(request,response,next)

/*
next() => is a function that calls the next handler in the chain
use next() only if your handler cannot handle the current request and you
want to pass it to the next handler.  
*/

```
# Available Handlers

``` js
const { addTimeStamp } = require('http-server'); 
// adds a timeStamp to each request

const { logRequest } = require('http-server'); 
// logs each request to console.

const { parseCookies } = require('http-server');
// parse the cookies and stores in request.

const { createInjectSession } = require('http-server'); 
// Injects the session related to cookies in request. 
createInjectSession(sessions) // pass ongoing sessions.

const { injectBody } = require('http-server');
// Reads and injects to body in request.

const { parseBodyUrl } = require('http-server');
// parses the body in request and stores it as bodyUrlParams if it is urlEncoded

const { createStaticFileHandler } = require('http-server');
// can server a static file.
createStaticFileHandler(dirName) 
// Pass the directory name you want to serve content from

const {notFoundHandler}=require('http-server');
// runs if no other handler can handle the request.
```

