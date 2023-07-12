const slides = Array.from(document.querySelectorAll('.pic'));
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        const translateXNum = 80 * (i - slide);
        const isCurrentSlide = i === slide;
        const transformValues = isCurrentSlide ? [0, 0, 0, 1, 100] : [5, translateXNum < 0 ? -5 : 5, 1, 0, 20];
        const [translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum] = transformValues;

        s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
        s.style.filter = `grayscale(${grayscaleNum})`;
        s.style.zIndex = zIndexNum;
        s.style.opacity = `${opacityNum}%`;
    });
};

const nextSlide = function () {
    curSlide = (curSlide + 1) % maxSlide;
    goToSlide(curSlide);
};

const prevSlide = function () {
    curSlide = (curSlide - 1 + maxSlide) % maxSlide;
    goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

goToSlide(curSlide);