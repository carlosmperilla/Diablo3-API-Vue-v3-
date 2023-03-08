Refactorizando de Vue 2 a Vue 3, Composition API, Pinia y Vite.  
Aplicación que usa la API de Diablo3 para renderizar información de héroes de usuarios.  
Basado en el repositorio original.  
Trabajado desde cero en el curso de Vue Avanzado: https://github.com/baumannzone/diablo3-vue-platzi

# Deploy Site
https://diablo3-vue-v3.netlify.app/#/

# Battle Tags por Region
**America(us):** https://us.diablo3.blizzard.com/es-mx/rankings  
**Europa(eu):** https://eu.diablo3.blizzard.com/es-es/rankings  
**Asia(kr):** https://kr.diablo3.blizzard.com/es-mx/rankings  

Selecciona uno del ranking, al lado de su nombre esta su número identificador.

Actualmente funcionan:

    BattleTag: Mokkori#1308
    Región: US

    y

    BattleTag: RememberMe#11475
    Región: US

# Cambios principales
- De Webpack a Vite.
  - Configuración en vite.config.js en lugar de vue.config.js
- De Options API a Composition API.
  - La logica de obtención  del token paso de main.js a App.vue
  - Al usar ref, reactive, se usa funciones computadas para poder saber si una variable esta 'llena' {....} o no {}
  - Uso de funciones Wrapper, para gestionar exportaciones de funciones que reemplazan a los mixins.
- De Vuex a Pinia.
  - Eliminando 'index.js' pasar de 'modules' a 'stores'.
  - Usando sintaxis de Composition, con ref, reactive, computed (en este caso no fue necesario) y functions.
  - Funciones como Actions (solo Actions, Mutaciones pasan a ser usadas como Actions).
  - No 'namespaces', uso directamente de los 'stores' (por ejemplo loadingStore).
  - Ya no se usa commit o dispatch.
  - Se obtiene acceso a otra 'store' por dentro de la definición de su 'store', no de su archivo contenedor.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
