// End Game Restart Loop Button //
var restartBtn = document.querySelector('#restart-button');

function restartGame(event) {
    event.preventDefault();

    location.href = 'index.html';
}

restartBtn.addEventListener('click', restartGame);

// // Victory or Defeat Check Logic//

// //Victory//
// Array.includes []

// //Defeat//
// Array.includes



// // Same endgame.obj in endgame.js, 