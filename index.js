const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
audio.Map.play();
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();

const foregroundImage = new Image();

const playerDownImage = new Image();
playerDownImage.src = "./img/playerDown.png";

const playerUpImage = new Image();
playerUpImage.src = "./img/playerUp.png";

const playerLeftImage = new Image();
playerLeftImage.src = "./img/playerLeft.png";

const playerRightImage = new Image();
playerRightImage.src = "./img/playerRight.png";

let myLevel = 1;
let myExp = 0; // Current EXP
let maxExp = 100; // EXP needed for next level

const collisionsMap = [];

image.src = "./img/pokemonStyleGameMapTileSetLevel1.png";
foregroundImage.src = "./img/Foreground Objects Level 1.png";
for (let i = 0; i < collosionsLevel1.length; i += 70) {
  collisionsMap.push(collosionsLevel1.slice(i, 70 + i));
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

  // Assuming myLevel, myExp, and maxExp variables

  // Reference the levelBoard
  const levelBoard = document.getElementById("levelBoard");
  levelBoard.style.display = "block"; // Ensure it's visible

  // Create level display
  const levelDisplay = document.createElement("div");
  levelDisplay.innerText = `Level: ${myLevel}`;
  levelDisplay.style.marginBottom = "5px"; // Add space below the level text

  // Create EXP container
  const expContainer = document.createElement("div");
  expContainer.style.position = "relative";
  expContainer.style.width = "150px";
  expContainer.style.height = "20px";
  expContainer.style.backgroundColor = "#ccc";
  expContainer.style.border = "2px solid black";
  expContainer.style.borderRadius = "5px";
  expContainer.style.overflow = "hidden"; // Prevent overflow of the progress bar

  // Create EXP progress bar
  const expBar = document.createElement("div");
  expBar.style.width = `${(myExp / maxExp) * 100}%`; // Calculate fill percentage
  expBar.style.height = "100%";
  expBar.style.backgroundColor = "green";
  expBar.style.position = "relative";
  expBar.style.transition = "width 0.3s ease"; // Smooth animation

  // Create gem icon inside EXP bar
  const gemIcon = document.createElement("img");
  gemIcon.src =
    "https://img.icons8.com/?size=100&id=Tam1qz0xqNlN&format=png&color=000000"; // Replace with your gem image URL
  gemIcon.alt = "Gem Icon";
  gemIcon.style.position = "absolute";
  gemIcon.style.top = "50%";
  gemIcon.style.right = "0"; // Position the gem at the end of the filled section
  gemIcon.style.transform = "translate(50%, -50%)"; // Center it vertically
  gemIcon.style.width = "20px"; // Adjust size
  gemIcon.style.height = "20px";

  // Add the gem icon to the EXP progress bar
  expBar.appendChild(gemIcon);

  // Add EXP bar to the container
  expContainer.appendChild(expBar);

  // Clear and update the levelBoard content
  levelBoard.innerHTML = ""; // Clear existing content
  levelBoard.appendChild(levelDisplay);
  levelBoard.appendChild(expContainer);

  document.getElementById("controls").style.display = "flex";

  document.getElementById("hamburger").style.display = "block";

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
        Math.random() < 0.02
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
                document.getElementById("levelBoard").style.display = "none";
                document.getElementById("hamburger").style.display = "none";
                document.getElementById("questBoard").style.display = "none";
                document.getElementById("controls").style.display = "none";
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

document.querySelector("#answerBox").addEventListener("click", () => {
  document.querySelector("#answerBox").style.display = "none";
});

function displayMeaning(meaning) {
  const dialogueBox = document.getElementById("answerBox");
  document.querySelector("#answerBox").style.display = "block";
  // document.querySelector("#dialogueBox").style.display = "none";

  dialogueBox.textContent = "";
  buttonContainer.innerHTML = "";
  dialogueBox.innerHTML =
    meaning +
    "... <br><br> <span id='continueMessage' style='position: absolute; bottom: 10px; right: 10px; font-size: 0.6em; color: gray;'>Click anywhere to continue</span>";
}

let randomQuestion;
let currentQuestionIndex = 0;

let usedLevel1QuestionIndices = new Set();
let usedLevel2QuestionIndices = new Set();

function getRandomQuestionIndex(max, usedIndicesSet) {
  let randomIndex;

  // If the Set contains all possible indices, clear it to start fresh
  if (usedIndicesSet.size >= max) {
    usedIndicesSet.clear();
  }

  // Generate a new random index until it's not in the Set
  do {
    randomIndex = Math.floor(Math.random() * max);
  } while (usedIndicesSet.has(randomIndex));

  // Add the new random index to the Set
  usedIndicesSet.add(randomIndex);

  return randomIndex;
}

function displayRandomQuestion() {
  document.querySelector("#dialogueBox").style.display = "block";

  if (myLevel >= 15) {
    const maxLevel2Questions = level.level2.questions.length;
    currentQuestionIndex = getRandomQuestionIndex(
      maxLevel2Questions,
      usedLevel2QuestionIndices
    );
    randomQuestion = level.level2.questions[currentQuestionIndex];
  } else {
    const maxLevel1Questions = level.level1.questions.length;
    currentQuestionIndex = getRandomQuestionIndex(
      maxLevel1Questions,
      usedLevel1QuestionIndices
    );
    randomQuestion = level.level1.questions[currentQuestionIndex];
  }

  const dialogueBox = document.getElementById("dialogueBox");

  dialogueBox.textContent = "";
  buttonContainer.innerHTML = "";

  // Create and display the question
  const questionElement = document.createElement("div");
  questionElement.innerHTML =
    randomQuestion.question +
    "<br><br> <span id='continueMessage' style='position: absolute; bottom: 10px; right: 10px; font-size: 0.6em; color: gray;'>Click anywhere to continue</span>";
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
              gsap.to("#levelBoard", {
                opacity: 0,
                onComplete: () => {
                  myExp += 25;
                  if (myExp >= maxExp) {
                    myExp = 0;
                    myLevel += 1;
                  }
                  gsap.to("#levelBoard", {
                    opacity: 1,
                  });
                },
              });
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
              gsap.to("#levelBoard", {
                opacity: 0,
                onComplete: () => {
                  gsap.to("#levelBoard", {
                    opacity: 1,
                  });
                },
              });
            },
          });
        }, 2000);
        return;
      }

      displayMeaning(answer[1]);

      displayRandomQuestion();
    });
  });
}

// displayRandomQuestion();

let hamburgerClicked = false;

const movableElement = document.getElementById("movableElement");

function moveElement() {
  const step = 10;

  if (keys.w.pressed) position.top -= step; // Move Up
  if (keys.a.pressed) position.left -= step; // Move Left
  if (keys.s.pressed) position.top += step; // Move Down
  if (keys.d.pressed) position.left += step; // Move Right

  // Apply the new position to the element
  movableElement.style.top = `${position.top}px`;
  movableElement.style.left = `${position.left}px`;
}

document.getElementById("moveUp").addEventListener("click", () => {
  keys.w.pressed = true;
  lastKey = "w";
  moveElement();
});

document.getElementById("moveLeft").addEventListener("click", () => {
  keys.a.pressed = true;
  lastKey = "a";
  moveElement();
});

document.getElementById("moveDown").addEventListener("click", () => {
  keys.s.pressed = true;
  lastKey = "s";
  moveElement();
});

document.getElementById("moveRight").addEventListener("click", () => {
  keys.d.pressed = true;
  lastKey = "d";
  moveElement();
});

// For simulating the keyup behavior when button is released
document.getElementById("moveUp").addEventListener("mouseup", () => {
  keys.w.pressed = false;
});

document.getElementById("moveLeft").addEventListener("mouseup", () => {
  keys.a.pressed = false;
});

document.getElementById("moveDown").addEventListener("mouseup", () => {
  keys.s.pressed = false;
});

document.getElementById("moveRight").addEventListener("mouseup", () => {
  keys.d.pressed = false;
});

window.addEventListener("keydown", (e) => {
  var modal = document.getElementById("myModal");
  if (hamburgerClicked) {
    return;
  } else {
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

document.getElementById("hamburger").addEventListener("click", () => {
  if (!hamburgerClicked) {
    gsap.to("#questBoard", {
      opacity: 0,
      onComplete: () => {
        gsap.to("#questBoard", {
          opacity: 1,
        });
        player.animate = false;
        document.getElementById("questBoard").style.display = "block";
      },
    });

    hamburgerClicked = true;
  } else {
    gsap.to("#questBoard", {
      opacity: 1,
      onComplete: () => {
        gsap.to("#questBoard", {
          opacity: 0,
        });
        player.animate = true;
        document.getElementById("questBoard").style.display = "none";
      },
    });

    hamburgerClicked = false;
  }
});

// Download pdf
document.getElementById("downloadBtn").addEventListener("click", function () {
  const playerName = document.getElementById("playerName").value;

  if (myLevel < 30) {
    showModal("Reach Level 30 First!");
    document.getElementById("playerName").value = "";
    return;
  }

  if (playerName.trim() === "") {
    showModal("Please enter your name.");
    return;
  }

  const { jsPDF } = window.jspdf;

  if (jsPDF) {
    const doc = new jsPDF();

    // Base64 encoded image data
    const imgData = "public/img/CERTIFICATE OF COMPLETION.png"; // Replace with actual base64 string

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const img = new Image();
    img.src = imgData;
    img.onload = function () {
      const imgAspectRatio = img.width / img.height;
      const pageAspectRatio = pageWidth / pageHeight;

      let imgWidth, imgHeight;
      if (imgAspectRatio > pageAspectRatio) {
        imgWidth = pageWidth;
        imgHeight = pageWidth / imgAspectRatio;
      } else {
        imgHeight = pageHeight;
        imgWidth = pageHeight * imgAspectRatio;
      }

      const imgX = (pageWidth - imgWidth) / 2;
      const imgY = (pageHeight - imgHeight) / 2;

      doc.addImage(img, "PNG", imgX, imgY, imgWidth, imgHeight);

      // Player's name
      doc.setFont("courier", "bold");

      doc.setFontSize(30);
      doc.setTextColor(0, 0, 0);
      doc.text(playerName, 105, 130, { align: "center" });

      doc.setFontSize(30);
      doc.setTextColor(255, 255, 255);
      doc.text(playerName, 105.3, 130.3, { align: "center" });

      // Date of completion
      const completionDate = new Date().toLocaleDateString();
      doc.setFont("courier", "bold");

      doc.setFontSize(20);
      doc.setTextColor(0, 0, 0);
      doc.text(`Date: ${completionDate}`, 105, 205, { align: "center" });

      doc.setFontSize(20);
      doc.setTextColor(255, 255, 255);
      doc.text(`Date: ${completionDate}`, 105.3, 205.3, { align: "center" });

      // Save the PDF
      doc.save("game-completion-certificate.pdf");
    };

    img.onerror = function () {
      console.error("Image failed to load.");
    };

    document.getElementById("playerName").value = "";
  } else {
    console.error("jsPDF is not loaded correctly.");
  }
});

function showModal(message) {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = message;
  modal.style.display = "flex";
}

// Function to close the custom modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  closeModal();
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
};
