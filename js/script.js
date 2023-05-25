// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

var swiper = new Swiper(".my-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   // pagination: {
   //   el: ".swiper-pagination",
   //   clickable: true,
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


// ".active-menu" class qo'shiladi
// ".burger-content" class qoshilishi kere bo'lgan element

let menuBtn = document.querySelector('.menu-burger__img')
let xBtn = document.querySelector('.x-btn')
let content = document.querySelector('.burger-content')

menuBtn.addEventListener('click', () => {
   content.classList.add('active-menu')
})

xBtn.addEventListener('click', () => {
   content.classList.remove('active-menu')
})

// $('.menu-burger__img').click(function () {
//    $('..burger-content').css('display', 'block')
// })