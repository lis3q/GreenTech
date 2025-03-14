// SwiperJs
const swiper = new Swiper('.swiper', {
    speed: 500,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
  
    pagination: {
      el: '.swiper-pagination-unique',
      clickable: true
    },
  
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  
});

// Saving posts in blog section
const saveBtns = document.querySelectorAll(".save-btn");
const savedBtns = document.querySelectorAll(".saved-btn");

saveBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    savedBtns[index].classList.add("active");
  });
});

savedBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("active");
    saveBtns[index].classList.remove("active");
  });
});

// AOS 
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 500 
});

// Hamburger menu
const hamburgerBtn = document.querySelector("header .hamburger");
const nav = document.querySelector("header nav");
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  nav.classList.toggle("active");
})