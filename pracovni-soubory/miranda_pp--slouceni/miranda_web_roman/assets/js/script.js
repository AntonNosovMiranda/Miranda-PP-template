let main_swiper = new Swiper ('.swiper', {
    slidesPerView: 4.65,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.65,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.65,
        },
        1600: {
            slidesPerView: 4.65,
        }
    }
});