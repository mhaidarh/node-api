const fetch = require("node-fetch");
const axios = require("axios");

const API_URL = `https://api.github.com/users/alikurniawan/followers`;

fetch(API_URL)
  .then(res => res.json())
  .then(body => console.log(body));

axios
  .get(API_URL)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
  });
