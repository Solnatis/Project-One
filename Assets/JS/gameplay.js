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
  entry: ["X", "Y", "Z"],
  prompt: ["You have arrived!"],
  opt: ["Go into the depth", "Turn around and go home!"],
  pic: undefined,
  choice: undefined,
};


var roomEntry1 = {
  roomname: "Choose Your Room",
  prompt: ["Choose wisely"],
  opt: ["Snake room", "Eagle room", "Hint room"],
  entry: ["Go into the depth"],
  pic: undefined,
  choice: undefined,
};


var snake = {
  roomname: "Snake Room",
  entry: ["Snake room"],
  prompt: ["A pit of snakes!!"],
  opt: ["Swing on vine", "Try to jump!"],
  pic: undefined,
  choice: undefined,
};


var eagle = {
  roomname: "Eagle Room",
  entry: ["Eagle room"],
  prompt: ["Door with key slot"],
  opt: ["Pick the green key", "Pick the blue key", "Pick the red key"],
  pic: undefined,
  choice: undefined,
};


var hint = {
  roomname: "Hint Room",
  entry: ["Hint room"],
  prompt: ["Names carry literal weight"],
  opt: ["Receive hint"],
  pic: undefined,
  choice: undefined,
};


var safe1 = {
  roomname: "Safe Room",
  entry: ["Swing on vine", "Pick the green key"],
  prompt: ["You made it to your first Safe Room!"],
  opt: ["Proceed to the next room"],
  pic: undefined,
  choice: undefined,
};

var roomEntry2 = {
  roomname: "Choose a room",
  prompt: ["Pick wisely"],
  opt: ["Boar room", "Dragon room", "Bear room"],
  entry: ["Proceed to the next room", "Receive hint", "Riddle Answer 1"],
  pic: undefined,
  choice: undefined,
};


var boar = {
  roomname: "Boar Room",
  entry: ["Boar room"],
  prompt: ["An angry minotaur!"],
  opt: ["Roll out of the way", "Try to stop him", "Side step"],
  pic: undefined,
  choice: undefined,
};


var dragon = {
  roomname: "Dragon Room",
  entry: ["Dragon room"],
  prompt: ["There's a sleeping dragon in this room! What to do?"],
  opt: ["Sneak past the dragon", "Take some treasure then leave!", "Wake him up because why not"],
  pic: undefined,
  choice: undefined,
};


var bear = {
  roomname: "Bear Room",
  entry: ["Bear room"],
  prompt: ["Bear chase! Run!"],
  opt: ["Run to the end of the hall", "Duck into a room", "Play dead"],
  pic: undefined,
  choice: undefined,
};

var dragonTrap = {
  roomname: "Dragon's Riddle",
  entry: ["Sneak past the dragon"],
  prompt: ["You woke the dragon! Solve this riddle to escape: Which animal can you make if you take; the head of a lamb, the middle of a pig, and the hind and tail of a dragon?"],
  opt: ["Lion", "Tiger", "Seahorse", "Hippo"],
  pic: undefined,
  choice: undefined,
};

var safe2 = {
  roomname: "Safe Room",
  prompt: ["Another safe room! Well done!"],
  entry: ["Lion", "Side step", "Wake him up because why not", "Play dead"],
  opt: ["Pick another room"],
  pic: undefined,
  choice: undefined,
};

var roomEntry3 = {
  roomname: "Choose Your Room",
  prompt: ["Choose wisely"],
  entry: ["Pick another room"],
  opt: ["Riddle Room", "Hydra Room", "Angel Room", "Riddle Answer 2"],
  pic: undefined,
  choice: undefined,
};

var riddleRoom = {
  roomname: "Riddle Room",
  entry: ["Riddle Room"],
  prompt: ["My challenge has made men throughout time stumble, I have defeated kings and left wise men humble, You see me now, but I am most often heard, and have killed men when with bullets paired, You might break a sweat when fighting with me, but I will exert no pressure on your body, and with a direct approach you can never find victory, work laterally rather than literally. What am I?"],
  opt: ["A riddle", "Time", "Age", "Happiness"],
  pic: undefined,
  choice: undefined,
};

var hydra = {
  roomname: "Hydra Room",
  entry: ["Hydra Room"],
  prompt: ["There's a room filled with water and a hydra stands before you! What do you do?"],
  opt: ["Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure", "Say you know a dragon"],
  pic: undefined,
  choice: undefined,
};

var angel = {
  roomname: "Angel Room",
  entry: ["Angel Room"],
  prompt: ["The safest of all rooms and the richest! You found the temple's treaure!"],
  opt: ["Claim your prize"],
  pic: undefined,
  choice: undefined,
};

var victoryScreen = {
  roomname: "VICTORY!",
  entry: ["A riddle", "Say you know a dragon", "Claim your prize"],
  prompt: ["YOU ESCAPED!"],
  explanation: ["You beat the temple's periless riddle!", "You managed to trick the hydra and got away safely!", "You walked out the temple a little bit richer"],
  pic: undefined,
  choice: undefined,
  winner: true,
};

var gameoverScreen = {
  roomname: "GAME OVER!",
  entry: ["Try to jump!", "Roll out of the way", "Try to stop him", "Take some treasure then leave!", "Run to the end of the hall", "Tiger", "Seahorse", "Hippo", "Time", "Age", "Happiness", "Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure"],
  prompt: ["GAME OVER"],
  explanation: ["Jumped a lil too short and the snakes got you", "You didn't roll far enough and got stomped", "What were you thinking?", "The treasure was death", "You can't outrun death!", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The spear bounces off the hydra's scales and now it's more mad", "What're you doing? You can't swim", "You have no tresure and the hydra is made"],
  pic: undefined,
  choice: undefined,
  winner: false,
}

// Room array to hold all the objects and parse through the array
var roomArray = [startRoom, roomEntry1, snake, eagle, hint, safe1, roomEntry2, boar, dragon, bear, dragonTrap, safe2, roomEntry3, riddleRoom, hydra, angel, victoryScreen, gameoverScreen];
var trapRoomArray = [];
var pathArray = [];

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
  var test = true;

  roomNameEl.textContent = "";
  roomNameEl.textContent = obj.roomname;
  
  promptEl.textContent = "";
  promptEl.textContent = obj.prompt[0];

  for (let i = 0; i < choicesArray.length; i++) {
    choicesArray[i].textContent = "";
    choicesArray[i].textContent = obj.opt[i];
    if (choicesArray[i].textContent !== "") {
      choicesArray[i].style.display = 'block';
      choicesArray[i].parentElement.style.display = 'inline-block';
    } else if (choicesArray[i].textContent === "") {
      test = false;
      choicesArray[i].style.display = 'none';  
      choicesArray[i].parentElement.style.display = 'none';
      console.log(test); 
    }    
  }
};

function pathArrayTracker(path) {
  pathArray.push(path);
  if(pathArray.length > 2) {
    pathArray.shift();
  }

  localStorage.setItem('path', JSON.stringify(pathArray));
}
// If statements need to work more with trap rooms and endgame
// clicks cycle through entire selection
function roomSelection(e) {
  e.preventDefault();

  var click = e.target; 
  var x = true;
  var z = true;
  if (click.matches(".option")) {
    
    for (let i = 0; i < roomArray.length; i++) {
      if (roomArray[i].entry.includes(click.textContent)) {
        
        room = roomArray[i];
        room.choice = click.textContent;
        pathArrayTracker(room);
        console.log(room);
        x = false;
        z = false;
        if (room === victoryScreen || room === gameoverScreen) {
          location.href = 'gameEndScreens.html';
        }
        
        renderRoom(room);
        break;
      } 
    }
    
    // Since trap room array is not populated prior to click, then you need to make array full
    for (let i = count; i < trapRoomArray.length; i++) {
      if (trapRoomArray[i].entry.includes(click.textContent) && x) {
        room = trapRoomArray[i];
        console.log(room);
        z = false;

        pathArrayTracker(room);
        renderTrap(room);
        break;       
      }
    }
    
    // for (let i = count; i < trapRoomArray.length; i++) {
    //   if (trapRoomArray[i].answer.includes(click.textContent) && )
    // }

    if ((trapRoomArray[count].answer === click.textContent) && z) {
      for (let i = 0; i < roomArray.length; i++) {
        if (roomArray[i].entry.includes("Riddle Answer " + count)) {
          room = roomArray[i];
          pathArrayTracker(room);
          renderRoom(room);
          break;
        }
      }      
    } else if (trapRoomArray[count].answer !== click.textContent && z) {
      room = gameoverScreen;
      pathArrayTracker(room);
      location.href = 'gameEndScreens.html';
    }

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