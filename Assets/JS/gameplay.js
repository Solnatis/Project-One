var backgroundPicEL = document.querySelector("#background-pic");

<<<<<<< HEAD
var promptEl = document.querySelector("#riddle-prompt");

=======
>>>>>>> dev
var riddleURL = "https://riddles-api.vercel.app/random";

var promptEl = document.querySelector('#prompt');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');





// Need to create objects and array of objects

// Objects will hold the prompt and paths

var startRoom = {
<<<<<<< HEAD
  roomname: "startRoom",
=======

>>>>>>> dev
  // Entry property is how the user picks the room
  entry: ["X", "Y", "Z"],

  // Prompt property displays prompt on main
  prompt: "You have arrived!",

  // Opt property is how the path the user take out of the room
  opt: ["Go into the depth", "Turn around and go home!"],

  // Pic property is the background image that is displayed upon entry
  // Pic can randomly be pulled with specificity
  pic: undefined,
};
var roomEntry1 = {
  roomname: "roomEntry1",
  prompt: ["pick a door"],
  opt: ["snake room", "eagle room", "Hint room"],
  entry: ["Go into the depth"],
};
var snake = {
  entry: ["snake room"],
  prompt: ["A pit of snakes!!"],
  opt: ["swing on vine", "try to jump"],
  pic: undefined,
};
var eagle = {
  entry: ["eagle room"],
  prompt: ["Door with key slot"],
  opt: ["pick the green key", "pick the blue key", "pick the red key"],
  pic: undefined,
};
var hint = {
  entry: ["Hint room"],
  pic: undefined,
  prompt: ["Give player hint for complex do or die"],
};
var safe1 = {
entry: [""],
prompt: ["sucess"],

}
var roomEntry2 = {
  roomname: "roomEntry2",
  prompt: ["pick a room"],
  opt: ["boar room", "dragon room", "bear room"],
  entry: [""],
};
var boar = {
  entry: ["boar room"],
  prompt: ["An angry minotar!!"],
  opt: ["roll out of the way", "try to stop him", "side step"],
  pic: undefined,
};
var dragon = {
  entry: ["dragon room"],
  prompt: ["Sleeping dragon!!"],
  opt: ["sneak past", "wake him up", "take some treasure"],
  pic: undefined,
};
var bear = {
  entry: ["bear room"],
  prompt: ["Bear chase!Run!!"],
  opt: ["run into the end of the hall", "duck into a room", "play dead"],
  pic: undefined,
};

<<<<<<< HEAD
// Room array to hold all the objects and parse through the array
var roomArray = [];

var trapRoomArray = [];

function trapRoomGenerator() {
=======
>>>>>>> dev
  // Trap room array will have riddles
  var trapRoom = {
    // Entry
    entry: ["1", "2", "3"],

    // Prompt / Riddle
    riddle: undefined,

    // Opt
<<<<<<< HEAD
    opt: trapRoomArray,

=======
    opt: [optionA, optionB, optionC, optionD],
  
>>>>>>> dev
    // Pic
    pic: undefined,
  };

// Room array to hold all the objects and parse through the array
var roomArray = [];

var trapRoomArray = [];



// Event listener when OPT for trap room activates
function trapRoomGenerator() {

  trapRoomStorage();
<<<<<<< HEAD
  trapRoomRetrieve();
=======

>>>>>>> dev
}

// Forgot why I need to use this function
function trapRoomRetrieve() {
  var parsedArray = JSON.parse(localStorage.getItem("trapRoomArray"));

  if (parsedArray !== null) trapRoomArray = parsedArray;
}

function trapRoomStorage() {
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
  getRiddleAPI();
}

<<<<<<< HEAD
function renderTrap() {}
=======

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





>>>>>>> dev

function getAPI() {
  var API_KEY = "";
  var url = "https://pixabay.com/api/?key=" + API_KEY;

  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// getAPI();

// Function should only happen on click event!
// Click event whenever you reach a trap room!
function getRiddleAPI() {
  fetch(riddleURL)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var randomRiddle = {
        riddle: data.riddle,
        answer: data.answer,
      };

      trapRoomArray.push(randomRiddle);

<<<<<<< HEAD
      if (trapRoomArray.length === 4) {
        localStorage.setItem("trapRoomArray", JSON.stringify(trapRoomArray));
      }
=======
    // Why would we need to store the trap array in local storage?
    // Might be over complicating things
    if (trapRoomArray.length === 4) {
      localStorage.setItem('trapRoomArray', JSON.stringify(trapRoomArray));
      renderTrap();
    }
>>>>>>> dev

      console.log(trapRoomArray);

      // Use randomRiddle to pull from data object!
    });
}

<<<<<<< HEAD
// Need to communicate via local storage
=======

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
>>>>>>> dev
