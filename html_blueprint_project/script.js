let score = 0;

const element = document.getElementById("scoreText");


function doalert(checkboxElem) {
    if (checkboxElem.checked) {
        score = score + 100;
        document.getElementById("scoreText").innerHTML = "Score: " + score;
    } else {
        score = score - 100;
        document.getElementById("scoreText").innerHTML = "Score: " + score;
    }
  }