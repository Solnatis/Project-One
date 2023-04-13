// End Game Restart Loop Button //
var restartBtn = document.querySelector('#restart-button');

var victoryEl = document.querySelector('#victory-text');
var explanationEl = document.querySelector('#explanation-text');
var imageEl = document.querySelector('#image');

function victoryCheck() {
    var parsedPath = JSON.parse(localStorage.getItem('path'));
    var index;

    if (parsedPath) {
        victoryEl.textContent = "";
        victoryEl.textContent = parsedPath[1].prompt[0];

        if (parsedPath[0].roomname === "Temple Riddle") {
            index = parsedPath[1].entry.indexOf("Temple Riddle");
            imageEl.textContent = "";
        imageEl.setAttribute("style", "background-image:url(" + parsedPath[1].pic + "); background-position:center; background-size:cover; align-items:center; width:50%; height: 300px;");
        } else {
            index = parsedPath[1].entry.indexOf(parsedPath[1].choice);
            imageEl.textContent = "";
        imageEl.setAttribute("style", "background-image:url(" + parsedPath[0].pic + "); background-position:center; background-size:cover; align-items:center; width:50%; height: 300px;");
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

// // Same endgame.obj in endgame.js, 