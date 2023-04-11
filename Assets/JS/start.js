var startBtn = document.querySelector('#start-btn');

function startGame(event) {
    event.preventDefault();

    location.href = 'mainRoom.html';
}

startBtn.addEventListener('click', startGame);

