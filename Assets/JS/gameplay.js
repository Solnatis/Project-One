var backgroundPicEL = document.querySelector('#background-pic');

var riddleURL = "https://riddles-api.vercel.app/random";

var promptEl = document.querySelector('#prompt');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');





// Need to create objects and array of objects

// Objects will hold the prompt and paths

var startRoom = {

  // Entry property is how the user picks the room
  entry: ["X", "Y", "Z"],

  // Prompt property displays prompt on main
  prompt: "You have arrived!",

  // Opt property is how the path the user take out of the room
  opt: ["Go into the depth", "Turn around and go home!"],

  // Pic property is the background image that is displayed upon entry
    // Pic can randomly be pulled with specificity
  pic: undefined,
}

  // Trap room array will have riddles
  var trapRoom = {
  
    // Entry
    entry: ["1", "2", "3"],
  
    // Prompt / Riddle
    riddle: undefined,
  
    // Opt
    opt: [optionA, optionB, optionC, optionD],
  
    // Pic
    pic: undefined,
  
  }

// Room array to hold all the objects and parse through the array
var roomArray = [];

var trapRoomArray = [];



// Event listener when OPT for trap room activates
function trapRoomGenerator() {

  trapRoomStorage();

}

// Forgot why I need to use this function
function trapRoomRetrieve() {
  var parsedArray = JSON.parse(localStorage.getItem('trapRoomArray'));

  if (parsedArray !== null)
    trapRoomArray = parsedArray;
}

function trapRoomStorage() {
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
}




// Everytime renderTrap() is called, the trapRoomArray must get smaller by 1
function renderTrap() {
  console.log("This is your array: " + trapRoomArray);

   promptEl.textContent = "";
   promptEl.textContent = trapRoomArray[0].riddle;

  for (let i = 0; i < trapRoomArray.length; i++) {
    trapRoom.opt[i].textContent = "";
    trapRoom.opt[i].textContent = trapRoomArray[i].answer;
  }

}

trapRoomGenerator();

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

    // Why would we need to store the trap array in local storage?
    // Might be over complicating things
    if (trapRoomArray.length === 4) {
      localStorage.setItem('trapRoomArray', JSON.stringify(trapRoomArray));
      renderTrap();
    }

    console.log(trapRoomArray);

    // Use randomRiddle to pull from data object!


  })
}




// Need to communicate via local storage



// Gameplay flow // direction

  // Start room 
    // EntryOne
      // Snake
        // Death
      // Eagle
      // Hint
      
      // TrapRoom
      // SafeOne
    
    // EntryTwo
      // Boar
      // Dragon
      // Bear

      // TrapRoom
      // Death

      // SafeTwo