window.onload = () => {
    const fullPage = document.querySelector('.full-page');
    const circles = document.querySelector('.circles');
    const clouds = document.querySelector('.clouds');
    const title = document.querySelector('.title');



    fullPage.addEventListener('mousemove', (event) => {
        circles.style.transform = `translate3d(${event.offsetX / 50}px, ${event.offsetY / 50}px, 0)`
        clouds.style.transform = `translate3d(${event.offsetX / 20}px, ${event.offsetY / 20}px, 0)`
        title.style.transform = `translate3d(${event.offsetX / 30}px, ${event.offsetY / 30}px, 0)`
    });
};