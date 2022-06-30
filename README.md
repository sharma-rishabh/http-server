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
