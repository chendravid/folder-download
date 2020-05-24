var express = require('express');
var app = express();
var path = require('path');

//get heroku port or use localhost
var port = process.env.PORT || 8080;


//public stuff
app.use(express.static(path.join(__dirname, "public")));


//read main html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

app.get('/download', function(req, res){
    const file = `${__dirname}/public/xscode-banner.svg`;
    res.download(file); // Set disposition and send it.
  });

//start server

app.listen(port);
console.log ("Running on port 8080");