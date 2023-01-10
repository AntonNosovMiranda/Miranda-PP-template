// INIT SWIPER

const mainSlider = new Swiper(".main-swiper-slider", {
    breakpoints: {
        768: {
            slidesPerView: "auto",
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
    },
});

// REDUCE OPACITY FOR SLIDERS WHICH ARE OUT OF WINDOW

const slides = document.querySelectorAll(".swiper-slide");

if (slides.length) {
    mainSlider.on("setTransition", reduceSlideOpacity);
}

function reduceSlideOpacity() {
    slides.forEach((slide) => {
        let browserWidth = document.documentElement.clientWidth + 5;
        let rect = slide.getBoundingClientRect();
        let slidePosition = rect.right;

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

// SHOW / HIDE SIBLING ELEMENTS

const articleButtons = document.querySelectorAll(".article-button");
const extraSolutionsButton = document.querySelector(".extra-solutions__item--button");

if (articleButtons.length) {
    articleButtons.forEach((button) => {
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
