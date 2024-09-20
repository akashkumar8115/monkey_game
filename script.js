 
score = 0;
cross = true;

audio = new Audio("./music.mp3");
audiogo = new Audio("./gameover.mp3");
setTimeout(() => {
  audio.play();
}, 1000);

setTimeout(() => {
    document.onkeyup = function (e) {
        // console.log("Key code is: ", e.keyCode);
        if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 101) {
          dino = document.querySelector(".monk");
          dino.classList.add("animateMonk");
          setTimeout(() => {
            dino.classList.remove("animateMonk");
          },800);
        }
        if (e.keyCode == 39 || e.keyCode == 102) {
          dino = document.querySelector(".monk");
          dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
          );
          dino.style.left = dinoX + 120 + "px";
        }
        if (e.keyCode == 37 || e.keyCode == 100) {
          dino = document.querySelector(".monk");
          dinoX = parseInt(
            window.getComputedStyle(dino, null).getPropertyValue("left")
          );
          dino.style.left = dinoX - 120 + "px";
        }
      };   
}, 5);



setInterval(() => {
  dino = document.querySelector(".monk");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY ,dx);
  if (offsetX < 90 && offsetY < 100) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("obstacleAni");
    // document.getElementById("obsi").style.left= "dx";
    document.getElementById("monky").style.display = "none";
    document.getElementById("rel").style.display = "block";
    document.getElementById("ready").style.display = "none";

    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
  } else if (offsetY > 100 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    function updateScore(score) {
      scoreCont.innerHTML = "Your Score: " + score;
    }
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0;
      obstacle.style.animationDuration = newDur + "s";
      // console.log('New animation duration: ', newDur);
    }, 10);
  }
}, 10);

function fly() {
  dino = document.querySelector(".monk");
  dino.classList.add("animateMonk");
  setTimeout(() => {
    dino.classList.remove("animateMonk");
  }, 700);
}
function left() {
  dino = document.querySelector(".monk");
  dinoX = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  dino.style.left = dinoX - 50 + "px";
}
function right() {
  dino = document.querySelector(".monk");
  dinoX = parseInt(
    window.getComputedStyle(dino, null).getPropertyValue("left")
  );
  dino.style.left = dinoX + 50 + "px";
}

document.addEventListener("click", 
function click() {
 
    dino = document.querySelector(".monk");
    dino.classList.add("animateMonk");
    setTimeout(() => {
      dino.classList.remove("animateMonk");
    },900);

})

function reload() {
  
  score = 0;
  obstacle = document.querySelector(".obstacle");
  dino = document.querySelector(".monk");

  obstacle.classList.add("obstacleAni");
  dino.classList.add("animateMonk");
  document.getElementById("monky").style.display = "block";
  scoreCont.innerHTML = "Your Score:  " + (score);

  document.getElementById("rel").style.display = "none";
  if (window.length.display < 520) {
    document.getElementById("ready").style.display = "none";

  } else {
    document.getElementById("ready").style.display = "flex";
  }
   gameOver = document.querySelector(".gameOver");
  gameOver.innerHTML = "AGAIN PLAY GAME WITH MONKEY AND LION";
  

}
  function fly() {
  dino = document.querySelector(".monk");
  dino.classList.add("animateMonk");
  setTimeout(() => {
    dino.classList.remove("animateMonk");
  }, 700);
}
