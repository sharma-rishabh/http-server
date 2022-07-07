const injectBody = (req, res, next) => {
  let body = '';
  req.on('data', (chunk) => body += chunk);
  req.on('end', () => {
    req.body = body;
    next();
  });
};

module.exports = { injectBody };