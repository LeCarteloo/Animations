window.onload = () => {

    window.addEventListener('scroll', () => {

        // First parallax animation
        const women = document.querySelector('.center-women');  
        const rock = document.querySelector('.right-rock');

        let scrollY = window.scrollY
        let womenRate = scrollY * 0.2;
        let rockRate = scrollY * 0.5;

        women.style.transform = `translateY(${womenRate}px)`;
        rock.style.transform = `translateY(${rockRate}px)`;

        // Second parallax animation
        const middleBox = document.querySelector('.middle-box h1');
        const detectPoint = middleBox.getBoundingClientRect().top;
        const allH1 = document.querySelectorAll('.middle-box h1');

        if(detectPoint < window.innerHeight - 500) {
            console.log(scrollY);

            allH1.forEach(h1 => {
                let speed = h1.dataset.speed;
                h1.style.transform = `translateY(${(scrollY - 936) * speed}px)`;
            });
        }

    });
};