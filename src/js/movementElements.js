"use strict"

export function movementElements() {
   buttonsMovement()
}

document.addEventListener('DOMContentLoaded', () => {
   // 1. Отримання елементів

   const logoToMove = document.querySelector('.top-header__logo');
   const newParentContainer = document.querySelector('.body-header__container');
   const referenceElement = document.querySelector('.icon-menu');

   // Перевірка наявності елементів
   if (!logoToMove || !referenceElement || !newParentContainer) {
      console.error("Не знайдено один або більше необхідних елементів. Перевірте селектори!");
      return;
   }

   // *** КЛЮЧОВЕ ЗМІНЕННЯ: ЗБЕРІГАННЯ ОРИГІНАЛЬНОЇ ПОЗИЦІЇ ***
   // Зберігаємо посилання на оригінальний батьківський елемент
   const originalParent = logoToMove.parentElement;

   // Зберігаємо елемент, який СЛІДУВАВ ЗА логотипом у верхньому хедері.
   // Якщо logoToMove був останнім, originalNextSibling буде null.
   const originalNextSibling = logoToMove.nextSibling;

   // 2. Визначаємо медіа-запит для порогу 849px
   const mediaQuery = window.matchMedia('(max-width: 849px)');

   // 3. Функція, що виконує логіку перенесення
   function handleLogoMovement(mq) {
      if (mq.matches) {
         // **МОБІЛЬНИЙ (<= 849px):** Переносимо логотип після icon-menu

         // Якщо логотип не знаходиться після орієнтира, переміщуємо його
         if (logoToMove.previousElementSibling !== referenceElement) {
            // Вставляємо логотип ПІСЛЯ орієнтирного елемента (.icon-menu)
            referenceElement.insertAdjacentElement('afterend', logoToMove);
            console.log("Логотип перенесено: після icon-menu (мобільний режим).");
         }

      } else {
         // **ДЕКСТОП (> 849px):** Повертаємо логотип у вихідне місце

         // Якщо логотип не знаходиться у своєму оригінальному батьківському елементі, повертаємо його
         if (logoToMove.parentElement !== originalParent) {
            // Використовуємо insertBefore(elementToInsert, referenceElement)
            // Якщо originalNextSibling == null, insertBefore працює як appendChild,
            // що є коректним для повернення в кінець контейнера.
            originalParent.insertBefore(logoToMove, originalNextSibling);
            console.log("Логотип повернуто на оригінальне місце (десктопний режим).");
         }
      }
   }

   // 4. Встановлення початкового стану та відстеження змін
   handleLogoMovement(mediaQuery);
   mediaQuery.addEventListener('change', handleLogoMovement);
});

// ========================================================================
function buttonsMovement() {
   const actionButtons = document.querySelectorAll(`.top-header__button`)
   const btnOne = actionButtons[0]
   const btnTwo = actionButtons[1]

   const oldParent = btnOne.parentElement

   const btnOneAnchor = btnOne.nextSibling
   const btnTwoAnchor = btnTwo.nextSibling

   const targetElement = document.querySelector(`.body-header__list`)

   const itemLink = document.querySelector(`.body-header__item:last-child`)

   const mediaQuery = window.matchMedia('(max-width: 849px)')

   function toggleButtons(mq) {
      if (mq.matches) {
         itemLink.insertAdjacentElement('afterend', btnOne)
         btnOne.insertAdjacentElement('afterend', btnTwo)
      } else {
         oldParent.insertBefore(btnOne, btnOneAnchor)
         oldParent.insertBefore(btnTwo, btnTwoAnchor)
      }
   }

   mediaQuery.addEventListener('change', toggleButtons)
   toggleButtons(mediaQuery)
}
