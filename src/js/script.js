"use strict"


import { initInputMode } from './inputMode'
import { initLoadAnimation } from './appInit';
import { utils } from './utils';
import { initEffects } from './effects'
import { movementElements } from './movementElements'
import { formUtils } from './formsUtils'
// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   initLoadAnimation()
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





