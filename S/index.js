    const slides = document.querySelectorAll('.slide');
    const points = document.querySelectorAll('.point');
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 20; // Width of slide including margin

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 2;
        } else if (index > slides.length - 2) {
            index = 0;
        }

        const transformValue = -index * slideWidth;
        document.querySelector('.slider').style.transform = `translateX(${transformValue}px)`;

        // Update points
        points.forEach((point, i) => {
            if (i === index) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        });

        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds