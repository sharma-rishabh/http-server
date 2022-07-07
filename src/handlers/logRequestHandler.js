const logRequest = (request, response, next) => {
  console.log(request.timeStamp.toLocaleString(),
    request.method, request.url.pathname);
  next();
};

module.exports = { logRequest };
