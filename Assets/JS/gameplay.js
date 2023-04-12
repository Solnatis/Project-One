var backgroundPicEL = document.querySelector('#background-pic');

var riddleURL = "https://riddles-api.vercel.app/random";

var roomNameEl = document.querySelector('#room-name');
var promptEl = document.querySelector('#prompt');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');

var optionContainer = document.querySelector('#option-container');

var choicesArray = [optionA, optionB, optionC, optionD];

var room;
var count = 0;

// // Trap room array will have riddles
// var trapRoom = {
//   // Entry into the room
//   entry: ["Pick the blue key", "Pick the red key", "Duck into a room"],

//   // Prompt / Riddle
//   riddle: undefined,

//   // Opt
//   opt: [optionA, optionB, optionC, optionD],

//   // Pic
//   pic: undefined,

// }

// Need to create objects and array of objects

// Objects will hold the prompt and paths

// TODO: Update all the arrays with proper punctuation and capitalization
var startRoom = {


  roomname: "Starter Room",

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
  roomname: "Choose Your Room",
  prompt: ["Pick a door"],
  opt: ["Snake room", "Eagle room", "Hint room"],
  entry: ["Go into the depth"],
};


var snake = {
  roomname: "Snake Room",
  entry: ["Snake room"],
  prompt: ["A pit of snakes!!"],
  opt: ["Swing on vine", "Try to jump!"],
  pic: undefined,
};


var eagle = {
  roomname: "Eagle Room",
  entry: ["Eagle room"],
  prompt: ["Door with key slot"],
  opt: ["Pick the green key", "Pick the blue key", "Pick the red key"],
  pic: undefined,
};


var hint = {
  roomname: "Hint Room",
  entry: ["Hint room"],
  prompt: [""],
  opt: ["Receive hint"],
  pic: undefined,
};


var safe1 = {
  roomname: "Safe Room",
  entry: ["Swing on vine", "Pick the green key"],
  prompt: ["You made it to your first Safe Room!"],
  opt: ["Proceed to the next room"],
  pic: undefined,
};

var roomEntry2 = {
  roomname: "Choose Your Room",
  prompt: ["Pick a room"],
  opt: ["Boar room", "Dragon room", "Bear room"],
  entry: ["Proceed to the next room", "Receive hint", "Riddle Answer 1"],
  pic: undefined,
};


var boar = {
  roomname: "Boar Room",
  entry: ["Boar room"],
  prompt: ["An angry minotaur!"],
  opt: ["Roll out of the way", "Try to stop him", "Side step"],
  pic: undefined,
};


var dragon = {
  roomname: "Dragon Room",
  entry: ["Dragon room"],
  prompt: ["There's a sleeping dragon in this room! What to do?"],
  opt: ["Sneak past the dragon", "Take some treasure then leave!", "Wake him up because why not"],
  pic: undefined,
};


var bear = {
  roomname: "Bear Room",
  entry: ["Bear room"],
  prompt: ["Bear chase! Run!"],
  opt: ["Run to the end of the hall", "Duck into a room", "Play dead"],
  pic: undefined,
};

var dragonTrap = {
  roomname: "Dragon's Riddle",
  entry: ["Sneak past the dragon"],
  prompt: ["You woke the dragon! Solve this riddle to escape: Which animal can you make if you take; the head of a lamb, the middle of a pig, and the hind and tail of a dragon?"],
  opt: ["Lion", "Tiger", "Seahorse", "Hippo"],
  pic: undefined,
};

var safe2 = {
  roomname: "Safe Room",
  entry: ["Lion", "Side step", "Wake him up because why not", "Play dead"],
  prompt: ["Another safe room! Well done!"],
  opt: ["Pick another room"],
  pic: undefined,
};

var roomEntry3 = {
  roomname: "Choose Your Room",
  entry: ["Pick another room"],
  prompt: ["Choose your next room!"],
  opt: ["Riddle Room", "Hydra Room", "Angel Room"],
  pic: undefined,
};

var riddleRoom = {
  roomname: "Riddle Room",
  entry: ["Riddle Room"],
  prompt: ["My challenge has made men throughout time stumble, I have defeated kings and left wise men humble, You see me now, but I am most often heard, and have killed men when with bullets paired, You might break a sweat when fighting with me, but I will exert no pressure on your body, and with a direct approach you can never find victory, work laterally rather than literally. What am I?"],
  opt: ["A riddle", "Time", "Age", "Happiness"],
  pic: undefined,
};

var hydra = {
  roomname: "Hydra Room",
  entry: ["Hydra Room"],
  prompt: ["There's a room filled with water and a hydra stands before you! What do you do?"],
  opt: ["Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure", "Say you know a dragon"],
  pic: undefined,
};

var angel = {
  roomname: "Angel Room",
  entry: ["Angel Room"],
  prompt: ["The safest of all rooms and the richest! You found the temple's treaure!"],
  opt: ["Claim your prize", "Claim your prize", "Claim your prize", "Claim your prize"],
  pic: undefined,
};

var victoryScreen = {
  roomname: "VICTORY!",
  entry: ["A riddle", "Say you know a dragon", "Claim your prize"],
  prompt: ["YOU ESCAPED!"],
  explanation: ["You beat the temple's periless riddle!", "You managed to trick the hydra and got away safely!", "You walked out the temple a little bit richer"],
  pic: undefined,
  winner: true,
};

var gameoverScreen = {
  roomname: "GAME OVER!",
  entry: ["Try to jump!", "Roll out of the way", "Try to stop him", "Take some treasure then leave!", "Run to the end of the hall", "Tiger", "Seahorse", "Hippo", "Time", "Age", "Happiness", "Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure"],
  prompt: ["GAME OVER"],
  explanation: ["Jumped a lil too short and the snakes got you", "You didn't roll far enough and got stomped", "What were you thinking?", "The treasure was death", "You can't outrun death!", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The spear bounces off the hydra's scales and now it's more mad", "What're you doing? You can't swim", "You have no tresure and the hydra is made"],
  pic: undefined,
  winner: false,
}

// Room array to hold all the objects and parse through the array
var roomArray = [startRoom, roomEntry1, snake, eagle, hint, safe1, roomEntry2, boar, dragon, bear, dragonTrap, safe2, roomEntry3, riddleRoom, hydra, angel, victoryScreen, gameoverScreen];
var trapRoomArray = [];
// var endingArray = [victoryScreen, gameoverScreen];

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
function renderTrap(obj) {
  console.log("This is your array: " + trapRoomArray);

  roomNameEl.textContent = "";
  roomNameEl.textContent = "Temple Riddle";

  promptEl.textContent = "";
  promptEl.textContent = obj.riddle;

  for (let i = 0; i < trapRoomArray.length; i++) {
    choicesArray[i].textContent = "";
    choicesArray[i].textContent = trapRoomArray[i].answer;
  }

  count++;
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
      entry: ["Pick the blue key", "Pick the red key", "Duck into a room"],
      riddle: data.riddle,
      answer: data.answer,
    };
    
    trapRoomArray.push(randomRiddle);
    
    
    // Why would we need to store the trap array in local storage?
    // Might be over complicating things
    if (trapRoomArray.length === 4) {
      renderRoom(startRoom);
      localStorage.setItem('trapRoomArray', JSON.stringify(trapRoomArray));
    }
  })
};

function startGame() {
  
  var confirm = localStorage.getItem('start-game');
  
  if (confirm) {
    trapRoomGenerator();
    // renderRoom(startRoom);
  };

}

function renderRoom(obj) {
  roomNameEl.textContent = "";
  roomNameEl.textContent = obj.roomname;
  
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
  var go = true;

  if (click.matches(".option")) {
    
  
    
    for (let i = 0; i < roomArray.length; i++) {
      if (roomArray[i].entry.includes(click.textContent)) {
        room = roomArray[i];
        console.log(room);
        go = false;
        if (room === victoryScreen) {
          localStorage.setItem('victory', room);
          location.href = 'gameEndScreens.html';
        }
        
        renderRoom(room);
        break;
      } 
    }
    
    // Since trap room array is not populated prior to click, then you need to make array full
    for (let i = count; i < trapRoomArray.length; i++) {
      if (trapRoomArray[i].entry.includes(click.textContent) && go) {
        room = trapRoomArray[i];

        console.log(room);
        renderTrap(room);
        break;       
      }
    }
    

        // Need to incorporate endgame objects for local storage


  }

}
// TODO: One you click on the correct option, the function will recursively call itself?
optionContainer.addEventListener('click', roomSelection);

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