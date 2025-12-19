"use strict"


import { initInputMode } from './inputMode'
import { utils } from './utils';
import { initEffects } from './effects'
import { movementElements } from './movementElements'
import { formUtils } from './formsUtils'
// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   initInputMode()
   initEffects()
   formUtils()
   utils()
   movementElements()
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initApp);
} else {
   initApp();
}





