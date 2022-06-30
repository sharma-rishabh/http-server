# Installation 
`npm install https://github.com/sharma-rishabh/http-server`

# Usage

```js
// Import createServer and createRouter.
const {startServer,createRouter}=require('http-server');

// Pass your handlers list to create router and get a router back.

const router=createRouter([handlers...]);

// Pass a port and the router you created to startServer.

startServer(port,router);

// Voila! your server is ready to serve.

```
