const redBox = document.querySelector('.red-box');


let speedX = 1;
let positionX = 0;
const maxXPosition = 400;

animateBox();


function animateBox() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * (-1);
    }
    redBox.style.left = `${positionX++}px`
    requestAnimationFrame(animateBox)
}