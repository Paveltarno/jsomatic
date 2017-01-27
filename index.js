var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'frontend')))

app.listen(3000, function () {
  console.log('jsomatic listening on port 3000!')
})
