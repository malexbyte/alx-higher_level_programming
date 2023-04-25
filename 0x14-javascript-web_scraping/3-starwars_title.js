#!/usr/bin/node
const request = require('request');
let url = 'http://swapi.co/api/films/' + process.argv[2];
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
