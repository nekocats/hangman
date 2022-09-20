const secretWordDiv = document.getElementById('secret-word');
const incorrectLettersDiv = document.getElementById('incorrect-letters');
const livesDiv = document.getElementById('lives');

let lives = 9;
const alphabet = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Õ', 'Ä', 'Ö', 'Ü'];
let incorrectLetters = [];
let secretWord = '';

fetch('words_hangman.txt')
.then(response => response.text())
.then(data => {
    words = data.split('\n');

    secretWord = words[Math.floor(Math.random() * words.length)];

    initGameBoard();

});

function initGameBoard () {
    for ( let i = 0; i < secretWord.length; i++ ) {
        const charSpan = document.createElement('span');
        charSpan.setAttribute('id', 'char-' + i);
        charSpan.innerText = '_';
        secretWordDiv.appendChild(charSpan);
    }  
}

document.addEventListener('keydown', (e) => {

    const charGuess = e.key.toUpperCase();

    if ( alphabet.includes(charGuess) && lives != 0 ) {

        let isCorrectLetter = false;

        for ( let i = 0; i < secretWord.length; i++ ) {
            if ( secretWord[i].toUpperCase() == charGuess ) {
                const charSpan = document.getElementById('char-' + i);
                charSpan.innerText = charGuess;
                isCorrectLetter = true;
            }
        }
        
        if ( !isCorrectLetter && !incorrectLetters.includes(charGuess) ) {
            incorrectLetters.push(charGuess);
            incorrectLettersDiv.innerHTML += charGuess;
            lives--;
            if ( lives == 0 ) {
                livesDiv.innerHTML = "Oih, läks veidi valesti, sõna oli<br>" + secretWord;                
            } else {
                livesDiv.innerText = lives;
            }
        }

    }
    
    if (lives == 8) {
        document.getElementById("1").style.display = "block";
    }
    else if (lives == 7) {
        document.getElementById("2").style.display = "block";
        document.getElementById("1").style.display = "block";
    }
    else if (lives == 6) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
    }
    else if (lives == 5) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
    }
    else if (lives == 4) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
    }
    else if (lives == 3) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "block";
    }
    else if (lives == 2) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
    }
    else if (lives == 1) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "block";
    }
    else if (lives == 0) {
        document.getElementById("3").style.display = "block";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "block";
        document.getElementById("9").style.display = "block";
    }


    console.log(charGuess, incorrectLetters);
});