const isDesktop = window.innerWidth >= 1600;
const sliderSettingsBasic = {
  lazy: true,
  direction: 'horizontal',
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
};

let sliderSettingsAdvanced = {};
if (isDesktop) {
  sliderSettingsAdvanced = {
    // slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
} else {
  sliderSettingsAdvanced = {
    // slidesPerView: 1,
    spaceBetween: 15,

  };
}

const swiperGallery = new Swiper('.gallery__slider', {...sliderSettingsBasic, ...sliderSettingsAdvanced});
console.log('gallery-slider.js load');
console.log(`sliderSettings: ${sliderSettingsAdvanced}`);
