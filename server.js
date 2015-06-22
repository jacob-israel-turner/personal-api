var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');

var app = express();

// var server = http.createServer(app);

var port = 9001;

var me = {
  name: 'Jacob Israel Turner',
  location: 'Provo, UT',
  hobbies: ['Coding', 'Musicking', 'Politicking'],
  occupations: ['instructor', 'mentor', 'pesticide applicator']
}


app.use(cors());
app.use(bodyParser.json());


app.get('/name', function(req, res){
  res.send(me.name);
});

app.get('/location', function(req, res){
  res.send(me.location);
});

app.get('/hobbies', function(req, res){
  res.json(me.hobbies);
});

app.get('/occupations', function(req, res){
  if(req.query.latest === 'true'){
    return res.json(me.occupations[0]);
  } else {
    res.json(me.occupations);
  }
});

app.put('/name', function(req, res){
  me.name = req.body.name;
  res.send(me.name);
});

app.listen(port, function(){
  console.log('Now listening on port', port);
});
