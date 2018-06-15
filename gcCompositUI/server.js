const express = require('express');
const server = express();
const request = require('request');
var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

//assume that config.json is in application root

data = getConfig('constants.json');

server.set('view engine', 'ejs');

server.get('/home', (req, res) =>
  Promise.all([
    getContents(data.HEADER_SERVICE_URL),
    getContents(data.BODY_SERVICE_URL)
  ]).then(responses =>
    res.render('index', { gcheader: responses[0], gcbody: responses[1]})
  ).catch(error =>
    res.send(error.message)
  )
);

const getContents = (url) => new Promise((resolve, reject) => {
  request.get(url, (error, response, body) => {
    if (error) return resolve("Error loading " + url + ": " + error.message);
    return resolve(body);
  });
});

server.get('/api/menus', (req, res) => {
	res.json(data.MENUS);
});
const port = process.env.PORT || 8180;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});