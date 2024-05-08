const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
audio.Map.play();
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const collisionsMap = [];
for (let i = 0; i < collosions.length; i += 70) {
  collisionsMap.push(collosions.slice(i, 70 + i));
}

const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i));
}

const boundaries = [];

const offset = {
  x: -545,
  y: -910,
};

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const battleZones = [];

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
        })
      );
  });
});

const image = new Image();
image.src = "./img/pokemonStyleGameMapTileSet.png";

const foregroundImage = new Image();
foregroundImage.src = "./img/Foreground Objects.png";

const playerDownImage = new Image();
playerDownImage.src = "./img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "./img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "./img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./img/playerRight.png";

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - -10 / 2,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10,
  },
  sprites: {
    up: playerUpImage,
    down: playerDownImage,
    right: playerRightImage,
    left: playerLeftImage,
  },
});

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: image,
});

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: foregroundImage,
});

let lastKey = "";

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

const movables = [background, ...boundaries, foreground, ...battleZones];

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  );
}

const battle = {
  initiated: false,
};

function animate() {
  const animationId = window.requestAnimationFrame(this.animate);
  background.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
  });

  battleZones.forEach((battleZone) => {
    battleZone.draw();
  });

  player.draw();
  foreground.draw();

  let animate = true;
  player.animate = false;

  if (battle.initiated) return;

  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i];
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y));
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
      ) {
        // deactivate current animation loop
        window.cancelAnimationFrame(animationId);

        audio.Map.stop();
        audio.initBattle.play();
        audio.battle.play();

        battle.initiated = true;
        gsap.to("#overlappingDiv", {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to("#overlappingDiv", {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                // activate a new animation loop
                initBattle();
                displayRandomQuestion();
                animateBattle();
                gsap.to("#overlappingDiv", {
                  opacity: 0,
                  duration: 0.4,
                });
              },
            });
          },
        });
        battle.initiated = true;
        break;
      }
    }
  }

  if (keys.w.pressed && lastKey === "w") {
    player.animate = true;
    player.image = player.sprites.up;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        animate = false;
        break;
      }
    }
    if (animate)
      movables.forEach((movable) => {
        movable.position.y += 3;
      });
  } else if (keys.a.pressed && lastKey === "a") {
    player.animate = true;
    player.image = player.sprites.left;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        animate = false;
        break;
      }
    }
    if (animate)
      movables.forEach((movable) => {
        movable.position.x += 3;
      });
  } else if (keys.s.pressed && lastKey === "s") {
    player.animate = true;
    player.image = player.sprites.down;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
            },
          },
        })
      ) {
        animate = false;
        break;
      }
    }
    if (animate)
      movables.forEach((movable) => {
        movable.position.y -= 3;
      });
  } else if (keys.d.pressed && lastKey === "d") {
    player.animate = true;
    player.image = player.sprites.right;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
            },
          },
        })
      ) {
        animate = false;
        break;
      }
    }
    if (animate)
      movables.forEach((movable) => {
        movable.position.x -= 3;
      });
  }
}

animate();

let battleBackgroundImage;
let battleBackground;

let draggleImage;
let draggle;

let embyImage;
let emby;

function initBattle() {
  document.querySelector("#userInterface").style.display = "block";
  document.querySelector("#dialogueBox").style.display = "none";
  document.querySelector("#enemyHealthBar").style.width = "100%";
  document.querySelector("#playerHealthBar").style.width = "100%";

  battleBackgroundImage = new Image();
  battleBackgroundImage.src = "./img/battleBackground.png";

  battleBackground = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    image: battleBackgroundImage,
  });

  draggleImage = new Image();
  draggleImage.src = "./img/draggleSprite.png";

  draggle = new Sprite({
    position: {
      x: 800,
      y: 100,
    },
    image: draggleImage,
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: "Draggle",
  });

  embyImage = new Image();
  embyImage.src = "./img/embySprite.png";

  emby = new Sprite({
    position: {
      x: 280,
      y: 325,
    },
    image: embyImage,
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: "Emby",
  });
}

// initBattle();

let battleAnimationId;

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle);
  battleBackground.draw();
  draggle.draw();
  emby.draw();
}

// animateBattle();

document.querySelector("#dialogueBox").addEventListener("click", () => {
  document.querySelector("#dialogueBox").style.display = "none";
});

function displayMeaning(meaning) {
  const dialogueBox = document.getElementById("dialogueBox");

  dialogueBox.textContent = "";
  buttonContainer.innerHTML = "";
  dialogueBox.innerHTML = meaning + "...";
}

function displayRandomQuestion() {
  document.querySelector("#dialogueBox").style.display = "block";
  currentQuestionIndex = Math.floor(Math.random() * level.questions.length);
  const randomQuestion = level.questions[currentQuestionIndex];

  const dialogueBox = document.getElementById("dialogueBox");

  dialogueBox.textContent = "";
  buttonContainer.innerHTML = "";

  // Create and display the question
  const questionElement = document.createElement("div");
  questionElement.innerHTML = randomQuestion.question;
  dialogueBox.appendChild(questionElement);

  // Iterate over the answer choices and create buttons
  Object.values(randomQuestion.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer[0];
    button.value = answer[2];
    buttonContainer.appendChild(button);

    button.addEventListener("click", () => {
      const selectedAttack = attacks[button.textContent];
      if (answer[2]) {
        emby.attack({
          attack: {
            name: selectedAttack,
            damage: 50,
            type: "Normal",
          },
          recepient: draggle,
        });
      } else {
        draggle.attack({
          attack: {
            name: selectedAttack,
            damage: 50,
            type: "Normal",
          },
          recepient: emby,
        });
      }
      if (draggle.health <= 0) {
        document.querySelector("#dialogueBox").innerHTML =
          draggle.name + " fainted!";
        setTimeout(() => {
          draggle.faint();
          audio.victory.play();
          gsap.to("#overlappingDiv", {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId);
              animate();
              document.querySelector("#userInterface").style.display = "none";
              gsap.to("#overlappingDiv", {
                opacity: 0,
              });
              battle.initiated = false;
              audio.battle.stop();
              audio.Map.play();
            },
          });
        }, 2000);
        return;
      } else if (emby.health <= 0) {
        document.querySelector("#dialogueBox").innerHTML =
          emby.name + " fainted!";
        setTimeout(() => {
          emby.faint();
          gsap.to("#overlappingDiv", {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId);
              animate();
              document.querySelector("#userInterface").style.display = "none";
              gsap.to("#overlappingDiv", {
                opacity: 0,
              });
              battle.initiated = false;
              audio.battle.stop();
              audio.Map.play();
            },
          });
        }, 2000);
        return;
      }

      displayMeaning(answer[1]);

      setTimeout(() => {
        displayRandomQuestion();
      }, 2000);
    });
  });
}

displayRandomQuestion();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    case "ArrowUp":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "ArrowLeft":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "ArrowDown":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "ArrowRight":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "ArrowUp":
      keys.w.pressed = false;
    case "ArrowLeft":
      keys.a.pressed = false;
      break;
    case "ArrowDown":
      keys.s.pressed = false;
      break;
    case "ArrowRight":
      keys.d.pressed = false;
      break;
  }
});

let clicked = false;

addEventListener("click", () => {
  if (!clicked) {
    audio.Map.play();
    clicked = true;
  }
});
