const swiperGallery = new Swiper('.gallery__slider', {
  lazy: true,
  slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  grabCursor: true,
});
console.log('gallery-slider.js load');
