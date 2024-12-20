class Sprite {
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    isEnemy = false,
    name,
  }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.animate = animate;
    this.sprites = sprites;
    this.opacity = 1;
    this.health = 100;
    this.isEnemy = isEnemy;
    this.name = name;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity;
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );
    c.restore();

    if (!this.animate) return;

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++;
      else this.frames.val = 0;
    }
  }

  faint() {
    gsap.to(this.position, {
      y: this.position + 20,
    });
    gsap.to(this, {
      opacity: 0,
    });
  }

  attack({ attack, recepient }) {
    document.querySelector("#dialogueBox").style.display = "block";

    const tl = gsap.timeline();

    recepient.health -= attack.damage;

    let movementDistance = 20;
    if (this.isEnemy) movementDistance = -20;

    let healthBar = "#enemyHealthBar";
    if (this.isEnemy) healthBar = "#playerHealthBar";

    tl.to(this.position, {
      x: this.position.x - movementDistance,
    })
      .to(this.position, {
        x: this.position.x + movementDistance * 2,
        duration: 0.1,
        onComplete: () => {
          // Enemy gets hit
          audio.tackleHit.play();
          gsap.to(healthBar, {
            width: recepient.health + "%",
          });
          gsap.to(recepient.position, {
            x: recepient.position.x + 10,
            yoyo: true,
            repeat: 5,
            duration: 0.08,
          });
          gsap.to(recepient, {
            opacity: 0,
            repeat: 5,
            yoyo: true,
            duration: 0.08,
          });
        },
      })
      .to(this.position, {
        x: this.position.x,
      });
  }
}

class Boundary {
  static width = 48;
  static height = 48;
  constructor({ position, zoneType }) {
    this.position = position;
    this.width = 48;
    this.height = 48;
    this.zoneType = zoneType;
  }

  draw() {
    c.fillStyle = "rgba(255, 0, 0, 0)";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
