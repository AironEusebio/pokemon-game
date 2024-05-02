const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const collisionsMap = []
for (let i = 0; i < collosions.length; i += 70) {
    collisionsMap.push(collosions.slice(i, 70 + i))
}

const boundaries = []

const offset = {
    x: -545,
    y: -910
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
      if (symbol === 1025)
        boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width + offset.x,
              y: i * Boundary.height + offset.y
            }
          })
        )
    })
  })

console.log(boundaries)

const image = new Image()
image.src = './img/pokemonStyleGameMapTileSet.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

const foregroundImage = new Image()
foregroundImage.src = './img/Foreground Objects.png'

const player = new Sprite ({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - (-10) / 2
    },
    image: playerImage,
    frames: {
        max: 4
    }
   
})

const background = new Sprite ({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foreground = new Sprite ({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

let lastKey = ''

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}


const movables = [
    background,
    ...boundaries,
    foreground
  ]

function rectangularCollision({rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height && 
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}


function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()

    })
    player.draw()
    foreground.draw()
        
    let moving = true
    if (keys.w.pressed && lastKey === 'w') {

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 3
                }}
                })
            ) {
                moving = false
                break
            }
        }
        if (moving) 
            movables.forEach((movable) => {
                movable.position.y += 3
            })
        
    }  
    else if (keys.a.pressed && lastKey === 'a') {
        
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x + 3,
                    y: boundary.position.y
                }}
                })
            ) {
                moving = false
                break
            }
        }
        if (moving) 
            movables.forEach((movable) => {
                movable.position.x += 3
            })
    }
    else if (keys.s.pressed && lastKey === 's') { 
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x,
                    y: boundary.position.y - 3
                }}
                })
            ) {
                console.log("colliding")
                moving = false
                break
            }
        }
        if (moving) 
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position: {
                    x: boundary.position.x - 3,
                    y: boundary.position.y
                }}
                })
            ) {
                console.log("colliding")
                moving = false
                break
            }
        }
        if (moving) 
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    }
    
    
}

animate()


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'ArrowUp': 
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'ArrowLeft':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 'ArrowDown':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'ArrowRight':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
            case 'ArrowUp': 
            keys.w.pressed = false
        case 'ArrowLeft':
            keys.a.pressed = false
            break
        case 'ArrowDown':
            keys.s.pressed = false
            break
        case 'ArrowRight':
            keys.d.pressed = false
            break
    }
})