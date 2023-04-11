var backgroundPicEL = document.querySelector('#background-pic');

var promptEl = document.querySelector('#riddle-prompt');

var riddleURL = "https://riddles-api.vercel.app/random";

// Need to create objects and array of objects

// Objects will hold the prompt and paths

var room = {

  // Entry property is how the user picks the room
  entry: ["X", "Y", "Z"],

  // Prompt property displays prompt on main
  prompt: "PROMPT",

  // Opt property is how the path the user take out of the room
  opt: ["A", "B", "C"],

  // Pic property is the background image that is displayed upon entry
    // Pic can randomly be pulled with specificity
  pic: undefined,
}

// Room array to hold all the objects and parse through the array
var roomArray = [];

var trapRoomArray = [];




function trapRoomGenerator() {
  // Trap room array will have riddles
  var trapRoom = {
  
    // Entry
    entry: ["1", "2", "3"],
  
    // Prompt / Riddle
    riddle: "riddle",
  
    // Opt
    opt: ["riddle answer", "X", "y", "Z"],
  
    // Pic
    pic: undefined,
  
  }

}

function trapRoomRetrieve() {
  var parsedArray = JSON.parse(localStorage.getItem('trapRoomArray'));

  if (parsedArray !== null)
    trapRoomArray = parsedArray;
}

function trapRoomStorage() {
}


function renderTrap() {
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
}

renderTrap();








function getAPI() {

  var API_KEY = '';
  var url = "https://pixabay.com/api/?key=" + API_KEY;

  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
};

// getAPI();



// Function should only happen on click event!
// Click event whenever you reach a trap room!
function getRiddleAPI() {
  fetch(riddleURL)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    var randomRiddle = {
      riddle: data.riddle,
      answer: data.answer,
    }

    trapRoomArray.push(randomRiddle);

    if (trapRoomArray.length === 4) {
      localStorage.setItem('trapRoomArray', JSON.stringify(trapRoomArray));
    }

    console.log(trapRoomArray);

    // Use randomRiddle to pull from data object!


  })
}


// Need to communicate via local storage