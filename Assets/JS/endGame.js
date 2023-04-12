// End Game Restart Loop Button //
var restartBtn = document.querySelector('#restart-button');

var victoryEl = document.querySelector('#victory-text');
var explanationEl = document.querySelector('#explanation-text');

function victoryCheck() {
    var parsedVictory = JSON.parse(localStorage.getItem('victory'));

    var parsedPath = JSON.parse(localStorage.getItem('path'));

    if (victoryScreen.winner) {
        victoryEl.textContent = "";
        victoryEl.textContent = victoryScreen.prompt[0];

        for (let i = 0; i < parsedPath[0].opt.length; i++) {
            if (parsedPath[1].entry.includes(parsedPath[0].opt[i]))
            var index = parsedPath[0].opt[i].indexOf();
            console.log(index);
            break;
        }
        explanationEl.textContent = "";
        explanationEl.textContent = parsedVictory.explanationEl[index];

    }
}

victoryCheck();

// If the option is within the entry of victory, then what is that victory.entry index
    // Save index as a variable
        // Pass the variable into victory.explanation[var]


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