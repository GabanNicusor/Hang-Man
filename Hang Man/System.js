let wordSaver = ' ';
let letterSaver;
let finalString = ' ';
let lengthSize;
let lifes = 7, verify = 1;


function saveWord() {
  wordSaver = document.getElementById("word").value;
  lifes = 7;
  lengthSize = wordSaver.length;
  var life = document.getElementById("life");
  life.innerHTML = "Life = " + lifes;
  for (let i = 0; i < lengthSize; ++i) {
    finalString[i] = "_";
  }
  var test = document.getElementById("file");
  test.innerHTML = wordSaver;
}
function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.slice(0, index);
    let lastPart = origString.slice(index + 1);
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

function checkLetterWord() {
  letterSaver = document.getElementById("letter").value;
  var test = document.getElementById("file");
  var life = document.getElementById("life");
  for (var i = 0; i < lengthSize; ++i) {
    if (letterSaver[0] === wordSaver[i]) {
      verify = 0;
      finalString = replaceChar(finalString, letterSaver, i);
    }
  }
  if(verify == 1) {
    --lifes;
    life.innerHTML = "Life = " + lifes;
  }
  verify = 1;
  var gameOver = document.getElementById("over");
  var gameWin = document.getElementById("Win");
  if(lifes == 0) {
    gameOver.innerHTML = "GAME OVER";
  }else if(finalString == wordSaver) {
    gameWin.innerHTML  = "WINNER";
  }
    test.innerHTML = finalString;
}

