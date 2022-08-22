function loadSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-prev-right",
      prevEl: ".swiper-button-prev-left",
    },
  });
}

loadSwiper();
