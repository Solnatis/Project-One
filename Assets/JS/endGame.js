// End Game Restart Loop Button //
var restartBtn = document.querySelector('#restart-button');

var victoryEl = document.querySelector('#victory-text');
var explanationEl = document.querySelector('#explanation-text');

function victoryCheck() {
    var parsedPath = JSON.parse(localStorage.getItem('path'));

    if (parsedPath) {
        victoryEl.textContent = "";
        victoryEl.textContent = parsedPath[1].prompt[0];

        for (let i = 0; i < parsedPath[0].opt.length; i++) {
            if (parsedPath[1].entry.includes(parsedPath[0].opt[i])) {
                var index = parsedPath[1].entry.indexOf(parsedPath[0].opt[i]);
                console.log(index);
                break;
            }
        }
        explanationEl.textContent = "";
        explanationEl.textContent = parsedPath[1].explanation[index];
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