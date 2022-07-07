const fs = require('fs');

const mimeTypes = (fileName) => {
  const extension = fileName.slice(fileName.lastIndexOf('.') + 1);
  const types = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    html: 'text/html',
    pdf: 'text/pdf',
    js: 'text/javascript',
    css: 'text/css',
    json: 'application/json',
    '': 'text/plain',
  }
  return types[extension];
}

const createStaticFileServer = (dirName) => (req, res, next) => {
  const filePath = dirName + req.url.pathname;
  console.log(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      next();
      return;
    }
    const type = mimeTypes(filePath) || 'text/plain';
    res.setHeader('Content-type', type);
    res.end(data);
  })
};

module.exports = { createStaticFileServer };
