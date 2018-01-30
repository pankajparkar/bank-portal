const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Gzip
app.use(compression({ threshold: 0 }));

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(port);

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log(`Server listening on ${port}`);