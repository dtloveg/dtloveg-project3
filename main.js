
  window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
  
    resizableSwiper(
      '(max-width: 768px)',
      '.brand-list__swiper',
      {
        direction: 'horizontal',
        slidesPerView: "auto",
        centeredSlides: false,
        loop: false,
        freeMode: false,
        grabCursor: true,
        
          
        pagination: {
          el: '.brand-list__swiper-pagination',
          clickable: true,
          
        },
      },
      
    );
});

let brands = document.querySelector('.brand-list__swiper-wrapper');
let showMore = document.querySelector('.brand-list__button-show-more');


let isShow = false;
showMore.addEventListener("click", function() {
    if (!isShow )
{
    brands.classList.add('brand-list__swiper-wrapper--hidden');
    showMore.classList.add('brand-list__button-show-more--clicked');
    showMore.textContent = "Скрыть";
    
    isShow  = true;
}
else
{
    brands.classList.remove('brand-list__swiper-wrapper--hidden');
    showMore.classList.remove('brand-list__button-show-more--clicked');
    isShow  = false;
    showMore.textContent = "Показать все";
    
}
});

