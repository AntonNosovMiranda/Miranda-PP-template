// Set the value of vw and wh variables

function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
}
function setVh() {
    let vh = document.documentElement.clientHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVw();
setVh();
window.addEventListener("resize", setVw);
window.addEventListener("resize", setVh);

// INIT SWIPER

const mainSlider = new Swiper(".slider__slider", {
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        1125: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
    },
});

// REDUCE OPACITY FOR SLIDERS WHICH ARE OUT OF WINDOW

const slides = document.querySelectorAll(".slider__slide");

if (slides.length) {
    mainSlider.on("slideChangeTransitionEnd", reduceSlideOpacity);
}

function reduceSlideOpacity() {
    slides.forEach((slide) => {
        let browserWidth = document.documentElement.clientWidth + 5;
        let rect = slide.getBoundingClientRect();
        let slidePosition = rect.right;
        let slidePositionLeft = rect.left;

        if (slidePositionLeft < 0) {
            slide.classList.add("--null-opacity");
        }
        if (slidePositionLeft >= 0) {
            slide.classList.remove("--null-opacity");
        }

        if (slidePosition > browserWidth) {
            slide.classList.add("--less-opacity");
        }
        if (slidePosition <= browserWidth) {
            slide.classList.remove("--less-opacity");
        }
    });
}

reduceSlideOpacity();

window.addEventListener("resize", reduceSlideOpacity);

// SHOW / HIDE ELEMENTS

const sectionButtons = document.querySelectorAll(".section__button");
const extraSolutionsButton = document.querySelector(".extra-solutions__item--button");

if (sectionButtons.length) {
    sectionButtons.forEach((button) => {
        button.addEventListener("click", toggleShowClass);
    });
}

if (extraSolutionsButton) {
    extraSolutionsButton.addEventListener("click", toggleShowClass);
}

function toggleShowClass(e) {
    let parent = e.target.closest("article") || e.target.closest("section");
    parent.classList.toggle("--show");
}

// SHOW / HIDE CHILD ELEMENTS

const items = document.querySelectorAll(".benefits__item");

if (items.length) {
    items.forEach((item) => {
        item.addEventListener("click", function () {
            item.classList.toggle("--show");
        });
    });
}

// ORBITVU
