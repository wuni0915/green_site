// 상품 스와이퍼

const proSwiper = new Swiper(".productSwiper", {
  loop: true,

  // 반응형
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    390: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 24,
    },
  },
});
// 0부터 1을 하겠다.
