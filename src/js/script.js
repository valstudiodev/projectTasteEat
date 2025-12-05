"use strict"

window.addEventListener('load', windowLoad)

document.addEventListener('click', documentActions)

window.addEventListener('scroll', scrollHeader)

let isMobile

function windowLoad() {
   isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   isMobile.any() ? document.body.setAttribute('data-touch', '') : null

   slidersInit();
   scrollHeader();
   // toggleCardContent();
   showList();
}

// ===========================================================================================
// -----------------------------
// scroll-header
// -----------------------------
// const header = document.querySelector(`.header`)

// function scrollHeader() {
//    if (header && window.scrollY > 50) {
//       header.classList.add('scrolled')
//       console.log("I see header");
//    } else {
//       header.classList.remove('scrolled')
//    }
// }

let lastScroll = 0;
const header = document.querySelector(".header");

function scrollHeader() {
   const current = window.pageYOffset;
   if (header && current > lastScroll) {
      header.classList.add("scrolled");
   } else {
      header.classList.remove("scrolled");
   }
   lastScroll = current;
}


// ===========================================================================================
// -----------------------------
// MENU-BURGER
// -----------------------------
function documentActions(e) {
   const targetElement = e.target
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('scroll-lock')
      document.documentElement.classList.toggle('menu-open')
   }
}

// ===========================================================================================
// -----------------------------
// SLIDER
// -----------------------------
function slidersInit() {
   if (document.querySelector('.slider-review')) {
      const swiper = new Swiper('.slider-review', {
         loop: true,
         // slidesPerView: 2.5,
         // spaceBetween: 30,

         pagination: {
            el: ".swiper-pagination",
         },

         breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 10,
            },
            630: {
               slidesPerView: 1.5,
               spaceBetween: 15,
               centteredSlides: true,
            },
            930: {
               slidesPerView: 2.2,
               spaceBetween: 25,
               centteredSlides: false,
            },
            1440: {
               slidesPerView: 2.5,
               spaceBetween: 30,
            },
         },
      });
   }
}

// ===========================================================================================
// -----------------------------
// filter
// -----------------------------
// document.addEventListener('DOMContentLoaded', () => {
//    const menuButtons = document.querySelectorAll('[data-filter]');
//    const galleryItems = document.querySelectorAll('[data-group]');

//    function filterItems(category) {
//       galleryItems.forEach(item => {
//          item.style.display = item.dataset.group === category ? 'grid' : 'none';
//       });
//    }

//    menuButtons.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//          menuButtons.forEach(b => b.classList.remove('active'));
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       });

//       if (index === 0) {
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       }
//    });
// });

// ===========================================================================================
// -----------------------------
// flip-cart
// -----------------------------
// function toggleCardContent() {
//    const cards = document.querySelectorAll('.cart-work__inner');

//    cards.forEach(card => {
//       card.addEventListener('click', () => {
//          // При кліку додаємо або прибираємо клас активного стану
//          if (window.innerWidth <= 768) {
//             card.classList.toggle('animCart');
//          }

//       });
//    });
// }

// ===========================================================================================
// -----------------------------
// active-link
// -----------------------------
// const links = document.querySelectorAll('.menu-header__link')
// const current = window.location.pathname

// links.forEach(link => {
//    link.addEventListener('active', () => {
//       if (link.getAttribute('href') === current) {
//          link.classList.toggle('active-page')
//       }
//       console.log("works");
//    })
// })


// ===========================================================================================
// -----------------------------
// icon-show
// -----------------------------
// function showList() {
//    const iconShows = document.querySelectorAll(`.row-menu__icon`)

//    iconShows.forEach(iconShow => {
//       iconShow.addEventListener('click', () => {
//          if (iconShow) {
//             iconShow.classList.toggle('icon-active')
//          }
//       })
//    })
// }


function showList() {
   const items = document.querySelectorAll('.row-menu');

   items.forEach(item => {
      const icon = item.querySelector('.row-menu__icon');
      const wrap = item.querySelector('.row-menu__wrap');

      icon.addEventListener('click', () => {
         icon.classList.toggle('icon-active');
         wrap.classList.toggle('open');
      });
   });
}
