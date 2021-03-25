let canvas = document.querySelector('#canvas')
// sets context for the canvas variable
let ctx = canvas.getContext('2d')

// carImg.onload = animate
let roadImg = new Image()
roadImg.src = "./images/road.png"
// let road = {x: 0, y: 30, w: 450, h: 600, img: roadImg}

// carImg.onload = animate
let carImg = new Image()
carImg.src = "./images/delor.png"
// let car = { x: 0, y: 0, w: 100, h: 200, img: carImg}

class Car {
  constructor(img, x, y, w, h) {
    this.img = img
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
draw() {
  ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}

let delorean = new Car(carImg, 0, 0, 60, 120)

function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.drawImage(roadImg, 0, 0, 450, 600)
  // ctx.drawImage(toyota.img, toyota.x, toyota.y, toyota.w, toyota.h)
  delorean.draw()
  boxObstacle.draw()
}
animate()


window.onkeydown = function(e) {
  console.log(e.key)
  switch (e.key) {
    case "ArrowLeft":
      delorean.x -= 30;
      break;
      case "ArrowRight":
      delorean.x += 30;
      break;
      case "ArrowUp":
      delorean.y -= 30;
      break;
      case "ArrowDown":
      delorean.y += 30;
      break;
  }
}

class Obstacle {
  constructor(x, y, w, h, color) {
    this.color = color
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect (this.x, this.y, this.w, this.h) 
  }
}

let boxObstacle = new Obstacle(50, 50, 50, 50, "light blue")



//initiates img into ctx (which is = to canvas.getContext)
// let img = new Image()
// img.src = './images/road.png'
// img.onload = function () {
//   ctx.drawImage(img, 0, 0, 500, 700)
// }

// sets width & height of canvas = #canvas
// canvas.width = 500
// canvas.height = 700

// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

// selects the #canvas