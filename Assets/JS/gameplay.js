var backgroundPicEL = document.querySelector('#background-pic');

var riddleURL = "https://riddles-api.vercel.app/random";

var roomNameEl = document.querySelector('#room-name');
var promptEl = document.querySelector('#prompt');
var imageEl = document.querySelector('#image');
var optionA = document.querySelector('#option-a');
var optionB = document.querySelector('#option-b');
var optionC = document.querySelector('#option-c');
var optionD = document.querySelector('#option-d');

var optionContainer = document.querySelector('#option-container');

var choicesArray = [optionA, optionB, optionC, optionD];

var room;
var count = 0;
var countMinus = 0;

var startRoom = {
  roomname: "Temple Entrance",
  entry: ["X", "Y", "Z"],
  prompt: ["You have arrived, after many long hours of driving through the misty rainforest, at the foot of an Ancient Temple. Long forgotten to the world, you can only imagine what great treasurs lie within. The Temple stands over you a many hundreds of feet, casting a dark and ominious shadow over you. What will you do? "],
  opt: ["Enter the Depths of the Temple!", "Turn around and go home!"],
  picDesc: "beginning-of-path",
  pic: undefined,
  choice: undefined,
};

var noTurningAroundRoom = {
  roomname: "There's no turning back brave Adventurer!",
  entry: ["Turn around and go home!"],
  prompt: ["Adventure Calls! You cant turn around now!"],
  opt: ["Go on in"],
  pic: undefined,
  choice: undefined,
}

var roomEntry1 = {
  roomname: "Choose Your Room",
  prompt: ["As you approach the gargantuan temple doors, they swing open... almost like they were expecting you. As you walk slowly inside you catch a glimmer of something metallic lining the temple walls. You step closer to get a better look to realize they are torches and decide to grab and light one. Suddenly the doors behind you slam shut, locking you inside. As the darkness fills the room, the soft warm glow of the torch illuminates the rest of the temple entrance room and you see before you lies three giant stone doors each with a Unique Animal etched into them. The light of your torch dances of the eerie walls. You must pick a door to carry on deeper. Which do you choose?"],
  opt: ["Snake room", "Eagle room", "Hint room"],
  entry: ["Enter the Depths of the Temple!", "Go on in"],
  pic: undefined,
  choice: undefined,
  picDesc: "Doors",
};


var snake = {
  roomname: "Snake Room",
  entry: ["Snake room"],
  prompt: ["You approach the door depicting a large snake bearing its fangs. Right below the Etching, there is small indent in the shape of a hand. You place your hand on it and once you do, the etched snake illuminates a bright emereald glow and than swings open. Once inside the room, the door closes and after moving forward more into the room you notice that the middle of the room has sunk into the ground. As you peer over into the darkness you swing your torch out to see if you can see into the depths. What lies below was what looks to be a giant snake statue with emerald eyes. But what surrounds it are Giant, Obsidisan Vipers. They notice you and you can sense they want a snack. Think Quickly! What do you do!!"],
  opt: ["Swing on vine", "Try to jump!"],
  picDesc: "Snakes",
  pic: undefined,
  choice: undefined,
};


var eagle = {
  roomname: "Eagle Room",
  entry: ["Eagle room"],
  prompt: ["Door with key slot"],
  opt: ["Pick the green key", "Pick the blue key", "Pick the red key"],
  picDesc: "Eagle",
  pic: undefined,
  choice: undefined,
};


var hint = {
  roomname: "Hint Room",
  entry: ["Hint room"],
  prompt: ["Names carry literal weight"],
  opt: ["Receive hint"],
  picDesc: "Hint",
  pic: undefined,
  choice: undefined,
};


var safe1 = {
  roomname: "Safe Room",
  prompt: ["You made it to your first Safe Room!"],
  entry: ["Swing on vine", "Pick the green key", "Riddle Answer 1"],
  opt: ["Proceed to the next room"],
  picDesc: "thumbs-up",
  pic: undefined,
  choice: undefined,
};

var roomEntry2 = {
  roomname: "Choose a room",
  prompt: ["Pick wisely"],
  opt: ["Boar room", "Dragon room", "Bear room"],
  entry: ["Proceed to the next room", "Receive hint"],
  picDesc: "doors",
  pic: undefined,
  choice: undefined,
};


var boar = {
  roomname: "Boar Room",
  entry: ["Boar room"],
  prompt: ["An angry minotaur!"],
  opt: ["Roll out of the way", "Try to stop him", "Side step"],
  picDesc: "Minotaur",
  pic: undefined,
  choice: undefined,
};


var dragon = {
  roomname: "Dragon Room",
  entry: ["Dragon room"],
  prompt: ["There's a sleeping dragon in this room! What to do?"],
  opt: ["Sneak past the dragon", "Take some treasure then leave!", "Wake him up because why not"],
  picDesc: "Dragon",
  pic: undefined,
  choice: undefined,
};


var bear = {
  roomname: "Bear Room",
  entry: ["Bear room"],
  prompt: ["Bear chase! Run!"],
  opt: ["Run to the end of the hall", "Duck into a room", "Play dead"],
  picDesc: "angry-bear",
  pic: undefined,
  choice: undefined,
};

var dragonTrap = {
  roomname: "Dragon's Riddle",
  entry: ["Sneak past the dragon"],
  prompt: ["You woke the dragon! Solve this riddle to escape: Which animal can you make if you take; the head of a lamb, the middle of a pig, and the hind and tail of a dragon?"],
  opt: ["Lion", "Tiger", "Seahorse", "Hippo"],
  picDesc: "angry-dragon",
  pic: undefined,
  choice: undefined,
};

var safe2 = {
  roomname: "Safe Room",
  prompt: ["Another safe room! Well done!"],
  entry: ["Lion", "Side step", "Wake him up because why not", "Play dead", "Riddle Answer 2"],
  opt: ["Pick another room"],
  picDesc: "thumbs-up",
  pic: undefined,
  choice: undefined,
};

var roomEntry3 = {
  roomname: "Choose Your Room",
  prompt: ["Choose wisely"],
  entry: ["Pick another room"],
  opt: ["Riddle Room", "Hydra Room", "Angel Room"],
  picDesc: "doors",
  pic: undefined,
  choice: undefined,
};

var riddleRoom = {
  roomname: "Riddle Room",
  entry: ["Riddle Room"],
  prompt: ["My challenge has made men throughout time stumble, I have defeated kings and left wise men humble, You see me now, but I am most often heard, and have killed men when with bullets paired, You might break a sweat when fighting with me, but I will exert no pressure on your body, and with a direct approach you can never find victory, work laterally rather than literally. What am I?"],
  opt: ["A riddle", "Time", "Age", "Happiness"],
  picDesc: "riddles",
  pic: undefined,
  choice: undefined,
};

var hydra = {
  roomname: "Hydra Room",
  entry: ["Hydra Room"],
  prompt: ["There's a room filled with water and a hydra stands before you! What do you do?"],
  opt: ["Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure", "Say you know a dragon"],
  picDesc: "hydra",
  pic: undefined,
  choice: undefined,
};

var angel = {
  roomname: "Angel Room",
  entry: ["Angel Room"],
  prompt: ["The safest of all rooms and the richest! You found the temple's treaure!"],
  opt: ["Claim your prize"],
  picDesc: "angel",
  pic: undefined,
  choice: undefined,
};

var victoryScreen = {
  roomname: "VICTORY!",
  entry: ["A riddle", "Say you know a dragon", "Claim your prize"],
  prompt: ["YOU ESCAPED!"],
  explanation: ["You beat the temple's periless riddle!", "You managed to trick the hydra and got away safely!", "You walked out the temple a little bit richer"],
  picDesc: "Winner",
  pic: undefined,
  choice: undefined,
  winner: true,
};

var gameoverScreen = {
  roomname: "GAME OVER!",
  entry: ["Try to jump!", "Roll out of the way", "Try to stop him", "Take some treasure then leave!", "Run to the end of the hall", "Tiger", "Seahorse", "Hippo", "Time", "Age", "Happiness", "Pick up a rusty spear and throw it", "Try to swim across", "Offer your treasure", "Temple Riddle"],
  prompt: ["GAME OVER"],
  explanation: ["You take a breath and take a few steps back. You sprint towards the edge and jump!... Right into the pit of Vipers.", "You didn't roll far enough and got stomped", "What were you thinking?", "The treasure was death", "You can't outrun death!", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The spear bounces off the hydra's scales and now it's more mad", "What're you doing? You can't swim", "You have no tresure and the hydra is made", "The temple claims another with its riddles"],
  explanation: ["Jumped a lil too short and the snakes got you", "You didn't roll far enough and got stomped", "What were you thinking?", "The treasure was death", "You can't outrun death!", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The temple claims another with its riddles", "The spear bounces off the hydra's scales and now it's more mad", "What're you doing? You can't swim", "You have no tresure and the hydra is made", "The temple claims another with its riddles"],
  picDesc: "game-over",
  pic: undefined,
  choice: undefined,
  winner: false,
}

// Room array to hold all the objects and parse through the array
var roomArray = [startRoom, noTurningAroundRoom, roomEntry1, snake, eagle, hint, safe1, roomEntry2, boar, dragon, bear, dragonTrap, safe2, roomEntry3, riddleRoom, hydra, angel, victoryScreen, gameoverScreen];
var trapRoomArray = [];
var pathArray = [];
var imageArray = [];

// Event listener when game starts
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

function renderTrap(obj) {
  console.log("This is your array: " + trapRoomArray);

  roomNameEl.textContent = "";
  roomNameEl.textContent = "Temple Riddle";

  promptEl.textContent = "";
  promptEl.textContent = obj.prompt;

  for (let i = 0; i < trapRoomArray.length; i++) {
    choicesArray[i].textContent = "";
    choicesArray[i].textContent = trapRoomArray[i].answer;
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
  

  count++;
  countMinus++;

  if (count == countMinus) {
    countMinus--;
  }

}

// API for pictures
function getAPI(obj) {
  
  var API_KEY = '35250961-a303681d970967ada3dc0b10f';
  var url = "https://pixabay.com/api/?key=" + API_KEY + "&per_page=10&q=" + obj.picDesc + "&safesearch=true&";
  
  
  fetch(url)
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    
    var rand = Math.floor(Math.random() * 10);
    obj.pic = data.hits[rand].webformatURL;
    imageArray.push(obj);
    console.log(obj);


    if (imageArray.length === 5) {
      renderRoom(startRoom);
    }


    


  })
};

function getRiddleAPI() {
  fetch(riddleURL)
  .then(function(response) {
    // console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    
    var randomRiddle = {
      roomname: "Temple Riddle",
      entry: ["Pick the blue key", "Pick the red key", "Duck into a room"],
      prompt: data.riddle,
      answer: data.answer,
    };
    
    trapRoomArray.push(randomRiddle);
    
    
    // Why would we need to store the trap array in local storage?
    // Might be over complicating things
    if (trapRoomArray.length === 4) {
      createImageQuery();
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

  imageEl.textContent = "";
  imageEl.setAttribute("style", "background-image:url(" + obj.pic + "); background-position:center; background-size:cover; align-items:center; width:50%; height: 300px;");
  
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

function roomSelection(e) {
  e.preventDefault();

  var click = e.target; 
  var x = true;
  var z = true;
  if (click.matches(".option")) {

    console.log(click.textContent);
    
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

    if ((z && x) && (pathArray[1].answer === click.textContent)) {
      for (let i = 0; i < roomArray.length; i++) {
        if (roomArray[i].entry.includes("Riddle Answer " + count)) {
          room = roomArray[i];
          pathArrayTracker(room);
          renderRoom(room);
          break;
        }
      }      
    } else if ((z && x) && (pathArray[1].answer !== click.textContent)) {
      room = gameoverScreen;
      pathArrayTracker(room);
      location.href = 'gameEndScreens.html';
    }

  }

}

function endGame() {
  location.href = 'gameEndScreens.html'
}

function createImageQuery() {
  for (let i = 0; i < roomArray.length; i++) {
    getAPI(roomArray[i]);
  }
}

function setImageToObj(x) {

}

startGame();

optionContainer.addEventListener('click', roomSelection);