const html = (body) => `<h1>${body}</h1>`;

const notFoundHandler = (_, response) => {
  console.log('inside Not found');
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/html');
  response.end(html('Sorry!! We couldn\'t find the page you\'re looking for'));
};

module.exports = { notFoundHandler };
