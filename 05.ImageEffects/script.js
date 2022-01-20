window.onload = () => {

    const bridge = document.querySelector('.bridge');

    bridge.addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        let y = event.offsetY;

        const cardWidth = bridge.offsetWidth;
        const cardHeight = bridge.offsetHeight;

        const centerX = bridge.offsetLeft + cardWidth / 2;
        const centerY = bridge.offsetTop + cardHeight / 2;

        x = ((x - centerX) * 5 / (cardWidth / 2));
        y = -((y -  centerY) * 5 / (cardHeight / 2));

        console.log(x, y);
        bridge.style.transition = ``;
        bridge.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
    });

    bridge.addEventListener('mouseleave', (event) => {
        bridge.style.transform = `rotateX(0deg) rotateY(0deg)`;
        bridge.style.transition = `1s`;

    });

};
const list = document.querySelectorAll('.list li');
const stripe = document.querySelector('.stripe-left');
const stripeWidth = stripe.offsetHeight - list[list.length - 1].offsetHeight;

let speedX = 1;
initializeList();
animateList();

function initializeList() {
    let position = 0;
    for (const element of list) {
        element.style.bottom = `${position -= 50}px`
    }
}

function animateList() {
    list.forEach(element => {
        let positionX = parseInt(element.style.bottom);
        positionX = positionX + speedX;
        if (positionX > stripeWidth + 40) {
            element.style.bottom = `-30px`
            return;
        }
        element.style.bottom = `${positionX}px`
    });
    requestAnimationFrame(animateList)
}