// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 42,
    loop: true,
    peed: 1000,

    keyboard:{
        enable:true
    },
  
    // If we need pagination
    pagination: {
      el: '.slider-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-prev',
      prevEl: '.slider-button-next',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      
    },
  
  });