
var API_KEY = '';
var URL = "https://pixabay.com/api/?key="+ API_KEY

function getAPI() {
  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
};

getAPI();

var gameURL = "https://riddles-api.vercel.app/random"


function getRiddleAPI() {
  fetch(gameURL)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}

getGameAPI();