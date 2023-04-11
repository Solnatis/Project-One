var backgroundPicEL = document.querySelector("#background-pic");

var promptEl = document.querySelector("#riddle-prompt");

var riddleURL = "https://riddles-api.vercel.app/random";

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

// Room array to hold all the objects and parse through the array
var roomArray = [];

var trapRoomArray = [];

function trapRoomGenerator() {
  // Trap room array will have riddles
  var trapRoom = {
    // Entry
    entry: ["1", "2", "3"],

    // Prompt / Riddle
    riddle: undefined,

    // Opt
    opt: trapRoomArray,

    // Pic
    pic: undefined,
  };

  trapRoomStorage();
  trapRoomRetrieve();
}

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

function renderTrap() {}

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

      if (trapRoomArray.length === 4) {
        localStorage.setItem("trapRoomArray", JSON.stringify(trapRoomArray));
      }

      console.log(trapRoomArray);

      // Use randomRiddle to pull from data object!
    });
}

// Need to communicate via local storage
