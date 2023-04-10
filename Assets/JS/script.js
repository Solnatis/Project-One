
var API_KEY = '';
var URL = "https://pixabay.com/api/?key="+ API_KEY

function getAPI(url) {
  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
};

getAPI(URL);

var gameURL = "https://riddles-api.vercel.app/random"


function getGameAPI() {
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