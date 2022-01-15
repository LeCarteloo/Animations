window.onload = () => {
    window.addEventListener('scroll', () => {

        // Cards animation
        let cards = document.querySelectorAll('.cards-info');
        const showPoint = 150;
        
        const windowHeight = window.innerHeight;
        for (let i = 0; i < cards.length; i++) {
            const showTop = cards[i].getBoundingClientRect().top;

            if(showTop < windowHeight - showPoint) {
                cards[i].classList.add('active');
                continue;
            }

            cards[i].classList.remove('active');
        }


        // Bird and text animation
        let leftBox = document.querySelector('.left-box');
        let rightBox = document.querySelector('.right-box');

        const showLeft = leftBox.getBoundingClientRect().top;


        if(showLeft < windowHeight - showPoint) {
            leftBox.classList.add('active');
            rightBox.classList.add('active');
        } else {
            leftBox.classList.remove('active');
            rightBox.classList.remove('active');

        }

        // Third animation 
        let thirdAnim = document.querySelector('.third-anim');

        const showTop = thirdAnim.getBoundingClientRect().top;

        if(showTop < windowHeight - showPoint) {
            thirdAnim.classList.add('active');
        } else {
            thirdAnim.classList.remove('active');
        }

    });
}