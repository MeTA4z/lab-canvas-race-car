let canvas = document.querySelector('#canvas')
// sets context for the canvas variable
let ctx = canvas.getContext('2d')

// carImg.onload = animate
let roadImg = new Image()
roadImg.src = "./images/road.png"
let road = {x: 0, y: 30, w: 450, h: 600, img: roadImg}

// carImg.onload = animate
let carImg = new Image()
carImg.src = "./images/car.png"
let car = { x: 0, y: 0, w: 100, h: 200, img: carImg}

class Car {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}

let toyota = new Car(0, 0, 100, 200, carImg)

window.onkeydown = function(e) {
  console.log(e.key)
  switch (e.key) {
    case "ArrowLeft":
      toyota.x -= 30;
      // break;
      case "ArrowRight":
        toyota.x += 30;
  }
}


function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)
}
animate()






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