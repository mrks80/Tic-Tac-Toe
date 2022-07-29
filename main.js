fields = [];
let currentShape = 'cross';
let gameOver = false;

let audio_background = new Audio('./audio/background_music_3:40.mp3');
let audio_click = new Audio('./audio/click.mp3');
let audio_win = new Audio('./audio/win_sound.mp3');

function fillShape(id) {
    if (!fields[id] && !gameOver) {

        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
            audio_click.play();


        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
            audio_click.play();
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {

        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {

    let winner;

    // First row horizontal 
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        document.getElementById('line-1').classList.remove('d-none');
    }

    // Second row horizontal 
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('line-2').classList.remove('d-none');
    }

    // Third row horizontal 
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
        document.getElementById('line-3').classList.remove('d-none');
    }

    // First row vertical
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)';
        document.getElementById('line-4').classList.remove('d-none');
    }

    // Second row vertical
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)';
        document.getElementById('line-5').classList.remove('d-none');
    }

    // Third row vertical 
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)';
        document.getElementById('line-6').classList.remove('d-none');
    }

    // First row diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1) rotate(45deg)';
        document.getElementById('line-7').classList.remove('d-none');
    }
    // Second row diagonal 
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1) rotate(-45deg)';
        document.getElementById('line-8').classList.remove('d-none');
    }

    if (winner) {
        console.log('Gewonnen:', winner)
        gameOver = true;
        audio_win.play();
        endScreen();
    }
}

function restart() {
    gameOver = false;
    fields = [];

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
        document.getElementById('circle-win').classList.add('d-none');
        document.getElementById('cross-win').classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
  
}

function playMusic() {
    audio_background.play();
    audio_background.loop = true;
}

function stopMusic() {
    audio_background.currentTime = 0;
    audio_background.pause();
}

function changeVolume() {
    volume = document.getElementById("volume").value;
    audio_background.volume = volume;
    audio_win.volume = volume;
    audio_click.volume = volume;

    console.log(volume);
}

function endScreen() {
    if (currentShape === 'cross') {
        document.getElementById('cross-win').classList.remove('d-none');
        document.getElementById('cross-win').style.transform = 'scaleX(1)';
    }

    if (currentShape === 'circle') {
        document.getElementById('circle-win').classList.remove('d-none');
        document.getElementById('circle-win').style.transform = 'scaleX(1)';
        document.getElementById('cross-win').classList.add('d-none');
    }

}

