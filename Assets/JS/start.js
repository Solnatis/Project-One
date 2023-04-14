// Variable from query selector
var startBtn = document.querySelector('#start-btn');

// Function to move to main page
function startGame(event) {
    event.preventDefault();
    var startGame = 1;
    localStorage.setItem('start-game', startGame);
    location.href = 'mainRoom.html';
}

// Event listener
startBtn.addEventListener('click', startGame);