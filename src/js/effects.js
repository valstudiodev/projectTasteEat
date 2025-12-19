"use strict"

document.addEventListener('click', documentActions)

export function initEffects() {
   initScrollHeader()
   showList()
}

function initScrollHeader() {
   const header = document.querySelector('.header');
   if (!header) return;

   let lastScroll = window.scrollY;
   let downStart = window.scrollY;

   const OFFSET = 50;
   const DELTA = 8;
   const HIDE_AFTER = 40;

   const onScroll = () => {
      // 1. ЗАХИСТ: Якщо меню відкрите, повністю ігноруємо логіку скролу
      // Перевіряємо клас на html або на самому хедері
      if (document.documentElement.classList.contains('menu-open') ||
         header.classList.contains('menu-open')) {
         return;
      }

      const current = window.scrollY;
      const diff = current - lastScroll;

      if (Math.abs(diff) < DELTA) return;

      // Верх сторінки
      if (current <= OFFSET) {
         header.classList.remove('scrolled', 'visible');
         // Скидаємо інлайн-стилі, якщо вони додавалися через JS
         header.style.transform = '';
         downStart = current;
         lastScroll = current;
         return;
      }

      // Скрол вниз
      if (diff > 0) {
         if (current - downStart > HIDE_AFTER) {
            header.classList.add('scrolled');
            header.classList.remove('visible');
         }
      }
      // Скрол вгору
      else {
         header.classList.add('scrolled', 'visible');
         downStart = current;
      }

      lastScroll = current;
   };

   window.addEventListener('scroll', onScroll, { passive: true });
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
