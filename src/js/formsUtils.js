"use strict"

export function formUtils() {
   typeSwitcher();
}


// ===========================================================================================
// -----------------------------
// typeSwitcher form
// -----------------------------
function typeSwitcher() {
   // Знаходимо всі інпути з класом 'type-switcher'
   const inputs = document.querySelectorAll('.type-switcher');

   inputs.forEach(input => {
      const desiredType = input.getAttribute('data-type');
      const originalPlaceholder = input.getAttribute('data-placeholder');

      // 🔑 Оновлена функція, яка використовує setTimeout
      const setDesiredType = function () {
         // Перевіряємо, чи ми вже не змінили тип
         if (this.type === 'text') {

            // 🛑 ВАЖЛИВО: Використовуємо setTimeout(0)
            // Це дає браузеру час, щоб обробити native touch event,
            // і лише потім змінює тип. Це вирішує проблему на iOS.
            setTimeout(() => {
               this.type = desiredType;
               // Одразу викликаємо фокус, щоб активувати віджет
               this.focus();
            }, 0);
         }
      };

      // 1. Обробники для активації
      // Ми залишаємо mousedown/touchstart/click, але вони тепер викликають функцію з setTimeout
      input.addEventListener('mousedown', setDesiredType);
      input.addEventListener('touchstart', setDesiredType);
      input.addEventListener('click', setDesiredType);

      // 2. Обробник для деактивації (BLUR) – залишається надійним
      input.addEventListener('blur', function () {

         if (this.type === desiredType && this.value === "") {

            // Примусово скидаємо значення для надійності
            this.value = "";

            // Повертаємо тип назад на 'text'
            this.type = 'text';
            this.placeholder = originalPlaceholder;
         }
      });

      // 3. Початковий стан
      if (input.value) {
         input.type = desiredType;
      } else {
         input.type = 'text';
         input.placeholder = originalPlaceholder;
      }
   });
}
