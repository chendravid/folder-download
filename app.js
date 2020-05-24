var express = require('express');
var app = express();
var path = require('path');
var ua = require('universal-analytics');

//get heroku port or use localhost
var port = process.env.PORT || 8080;

//init Google analytics
var visitor = ua('UA-146955087-5');


//public stuff
app.use(express.static(path.join(__dirname, "public")));


//read main html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

app.get('/download', function(req, res){
    const file = `${__dirname}/public/xscode-banner.svg`;
    res.download(file); // Set disposition and send it.
    var origin = req.get('origin');
    console.log("Origin is:" + origin);
    visitor.event("Banner", "Download", origin).send()
  });

//start server
app.listen(port);
console.log ("Running on port 8080");