var startBtn = document.querySelector('#start-btn');


function startGame(event) {
    event.preventDefault();

    var startGame = 1;

    localStorage.setItem('start-game', startGame);


    location.href = 'mainRoom.html';
}

startBtn.addEventListener('click', startGame);

