window.onload = () => {

    const image = document.querySelector('.image');

    image.addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        let y = event.offsetY;

        const cardWidth = image.offsetWidth;
        const cardHeight = image.offsetHeight;

        const centerX = image.offsetLeft + cardWidth / 2;
        const centerY = image.offsetTop + cardHeight / 2;

        x = ((x - centerX) * 5 / (cardWidth / 2));
        y = -((y -  centerY) * 5 / (cardHeight / 2));

        console.log(x, y);
        image.style.transition = ``;
        image.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
    });

    image.addEventListener('mouseleave', (event) => {
        image.style.transform = `rotateX(0deg) rotateY(0deg)`;
        image.style.transition = `1s`;

    });

};