const isURLEncoded = (headers) => {
  return headers['content-type'] === 'application/x-www-form-urlencoded';
}

const parseParams = (rawParams) => {
  const params = {};
  for (const [key, value] of rawParams) {
    params[key] = value;
  }

  return params;
};

const parseBodyUrl = (req, res, next) => {
  if (!isURLEncoded(req.headers)) {
    next();
    return;
  }
  const params = new URLSearchParams(body);
  const bodyParams = parseParams(params);
  req.bodyUrlParams = bodyParams;
  next();
  return;
};

module.exports = { parseBodyUrl };
