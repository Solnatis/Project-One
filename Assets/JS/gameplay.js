var backgroundPicEL = document.querySelector('#background-pic');

var riddleURL = "https://riddles-api.vercel.app/random";

var promptEl = document.querySelector('#prompt');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');

// Trap room array will have riddles
var trapRoom = {
  // Entry into the room
  // Will update the entry array whenever we create more pathways into trapRoom
  entry: ["1", "2", "3"],

  // Prompt / Riddle
  riddle: undefined,

  // Opt
  opt: [optionA, optionB, optionC, optionD],

  // Pic
  pic: undefined,

}


// Need to create objects and array of objects

// Objects will hold the prompt and paths

var startRoom = {

  roomname: "startRoom",

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
  opt: ["Receive hint"]
};

var safe1 = {
entry: ["swing on vine", "pick the green key"],
prompt: undefined,
opt: ["proceed to the next room"],
pic: undefined,
};

var roomEntry2 = {
  roomname: "roomEntry2",
  prompt: ["pick a room"],
  opt: ["boar room", "dragon room", "bear room"],
  entry: ["proceed to the next room", "Receive hint"],
  pic: undefined,
};

var boar = {
  entry: ["boar room"],
  prompt: ["An angry minotar!!"],
  opt: ["roll out of the way", "try to stop him", "side step"],
  pic: undefined,
};

var dragon = {
  entry: ["dragon room"],
  prompt: ["There's a sleeping dragon in this room! What to do?"],
  opt: ["Sneak pass the dragon", "Take some treasure then leave!", "Wake him up because why not"],
  pic: undefined,
};

var bear = {
  entry: ["bear room"],
  prompt: ["Bear chase!Run!!"],
  opt: ["run into the end of the hall", "duck into a room", "play dead"],
  pic: undefined,
};

var dragonTrap = {
  entry: ["Sneak pass the dragon"],
  prompt: ["Dragon riddle"],
  opt: ["ans", "death option"],
  pic: undefined,
};

var safe2 = {
  entry: ["side step", "Wake him up because why not", "play dead"],
  prompt: undefined,
  opt: ["Proceed to the next room"],
  pic: undefined,
};

var roomEntry3 = {
  entry: ["Proceed to the next room"],
  prompt: ["Choose your next room!"],
  opt: ["Riddle Room", "Hydra Room", "Angel Room"],
  pic: undefined,
};

var riddleRoom = {
  entry: ["Riddle Room"],
  prompt: [something],
  opt: ["A", "B", "C", "D"],
  pic: undefined,
};

var hydra = {
  entry: ["Hydra Room"],
  prompt: [promptForHydra],
  opt: ["X", "Y", "Z"],
  pic: undefined,
};

var angel = {
  entry: ["Angel Room"],
  prompt: [promptForAngel],
  opt: ["L", "O", "L"],
  pic: undefined,
};

var victoryScreen = {
  entry: ["riddle-answer", "hydra-answer", "angel-answer"],
  prompt: ["YOU ESCAPED!"],
  explanation: ["explanation based off of entry"],
  pic: undefined,
};

var gameoverScreen = {
  entry: [arrayOfWrongsLOL],
  prompt: ["GAME OVER"],
  explanation: ["explanation based off of entry"],
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

// API for pictures
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
    };
    
    trapRoomArray.push(randomRiddle);
    
    // Why would we need to store the trap array in local storage?
    // Might be over complicating things
    if (trapRoomArray.length === 4) {
      localStorage.setItem('trapRoomArray', JSON.stringify(trapRoomArray));
      renderTrap();
    }
  })
};

trapRoomGenerator();



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