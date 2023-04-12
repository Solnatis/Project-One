var backgroundPicEL = document.querySelector('#background-pic');

var riddleURL = "https://riddles-api.vercel.app/random";

var promptEl = document.querySelector('#prompt');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');

var optionContainer = document.querySelector('#option-container');

var choicesArray = [optionA, optionB, optionC, optionD];

var room;

// Trap room array will have riddles
var trapRoom = {
  // Entry into the room
  entry: ["Pick the blue key", "Pick the red key", "Duck into a room"],

  // Prompt / Riddle
  riddle: undefined,

  // Opt
  opt: [optionA, optionB, optionC, optionD],

  // Pic
  pic: undefined,

}

// Need to create objects and array of objects

// Objects will hold the prompt and paths

// TODO: Update all the arrays with proper punctuation and capitalization
var startRoom = {


  roomname: "startRoom",

  // Entry property is how the user picks the room
  entry: ["X", "Y", "Z"],

  // Prompt property displays prompt on main
  prompt: ["You have arrived!"],

  // Opt property is how the path the user take out of the room
  opt: ["Go into the depth", "Turn around and go home!"],

  // Pic property is the background image that is displayed upon entry
  // Pic can randomly be pulled with specificity
  pic: undefined,
};


var roomEntry1 = {
  roomname: "roomEntry1",
  prompt: ["Pick a door"],
  opt: ["Snake room", "Eagle room", "Hint room"],
  entry: ["Go into the depth"],
};


var snake = {
  entry: ["Snake room"],
  prompt: ["A pit of snakes!!"],
  opt: ["Swing on vine", "Try to jump!"],
  pic: undefined,
};


var eagle = {
  entry: ["Eagle room"],
  prompt: ["Door with key slot"],
  opt: ["Pick the green key", "Pick the blue key", "Pick the red key"],
  pic: undefined,
};


var hint = {
  entry: ["Hint room"],
  prompt: ["Give player hint for complex do or die"],
  opt: ["Receive hint"],
  pic: undefined,
};


var safe1 = {
entry: ["Swing on vine", "Pick the green key"],
prompt: ["You made it to your first Safe Room!"],
opt: ["Proceed to the next room"],
pic: undefined,
};

var roomEntry2 = {
  roomname: "roomEntry2",
  prompt: ["Pick a room"],
  opt: ["Boar room", "Dragon room", "Bear room"],
  entry: ["Proceed to the next room", "Receive hint"],
  pic: undefined,
};


var boar = {
  entry: ["Boar room"],
  prompt: ["An angry minotaur!"],
  opt: ["Roll out of the way", "Try to stop him", "Side step"],
  pic: undefined,
};


var dragon = {
  entry: ["Dragon room"],
  prompt: ["There's a sleeping dragon in this room! What to do?"],
  opt: ["Sneak past the dragon", "Take some treasure then leave!", "Wake him up because why not"],
  pic: undefined,
};


var bear = {
  entry: ["Bear room"],
  prompt: ["Bear chase! Run!"],
  opt: ["Run to the end of the hall", "Duck into a room", "Play dead"],
  pic: undefined,
};

var dragonTrap = {
  entry: ["Sneak past the dragon"],
  prompt: ["Dragon riddle"],
  opt: ["ans", "death option"],
  pic: undefined,
};

var safe2 = {
  entry: ["Side step", "Wake him up because why not", "Play dead"],
  prompt: ["Another safe room! Well done!"],
  opt: ["Proceed to the next room"],
  pic: undefined,
};

var roomEntry3 = {
  entry: ["Proceed to the next room"],
  prompt: ["Choose your next room!"],
  opt: ["Riddle Room", "Hydra Room", "Angel Room"],
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
  prompt: [],
  opt: ["A", "B", "C", "D"],
  pic: undefined,
};

var hydra = {
  entry: ["Hydra Room"],
  prompt: ["Test"],
  opt: ["X", "Y", "Z"],
  pic: undefined,
};

var angel = {
  entry: ["Angel Room"],
  prompt: ["TEST"],
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
  entry: [],
  prompt: ["GAME OVER"],
  explanation: ["explanation based off of entry"],
  pic: undefined,
}

// Room array to hold all the objects and parse through the array
var roomArray = [startRoom, roomEntry1, snake, eagle, hint, safe1, roomEntry2, boar, dragon, bear, dragonTrap, safe2, roomEntry3, riddleRoom, hydra, angel];
var trapRoomArray = [];
var endingArray = [victoryScreen, gameoverScreen];

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

function startGame() {
  
  var confirm = localStorage.getItem('start-game');
  
  if (confirm) {
    renderRoom(startRoom);
  };

}

function renderRoom(obj) {
  promptEl.textContent = "";
  promptEl.textContent = obj.prompt[0];

  for (let i = 0; i < choicesArray.length; i++) {
    choicesArray[i].textContent = "";
    choicesArray[i].textContent = obj.opt[i];
  }
};


// If statements need to work more with trap rooms and endgame
// clicks cycle through entire selection
function roomSelection(e) {
  e.preventDefault();

  var click = e.target;

  if (click.matches(".option")) {

    for (let i = 0; i < roomArray.length; i++) {
      if (roomArray[i].entry.includes(click.textContent)) {
        room = roomArray[i];
        console.log(room);
        renderRoom(room);
      } 
    }


    // Since trap room array is not populated prior to click, then you need to make array full
    // for (let i = 0; i < trapRoomArray.length; i++); {
    //   if (trapRoomArray[i].entry.includes(click.value)) {
    //     room = trapRoomArray[i];
    //     trapRoomGenerator();
    //   }
    // }


        // Need to incorporate endgame objects for local storage


  }

}
// TODO: One you click on the correct option, the function will recursively call itself?
optionContainer.addEventListener('dblclick', roomSelection);

function endGame() {
  location.href = 'gameEndScreens.html'
}

startGame();



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

// TODO: Create a list of explanations array within each object - -> This will display with the next room prompt
// TODO: Fill out entry array for gameover object