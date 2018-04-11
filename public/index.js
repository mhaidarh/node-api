"use strict";

var fetch = require("node-fetch");
var axios = require("axios");

var API_URL = "https://api.github.com/users/alikurniawan/followers";

fetch(API_URL).then(function (res) {
  return res.json();
}).then(function (body) {
  return console.log(body);
});

axios.get(API_URL).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});