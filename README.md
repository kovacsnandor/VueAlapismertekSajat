# VueAlapismertek
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).
## Project Setup
```sh
npm install
```
### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# Környezet telepítése
branch: 01_adatkotes_data

vite: `npm create vue@latest`
bootstrap: `npm i bootstrap@5.3.3`
icons: `npm i bootstrap-icons`
node_moduls: `npm install`
`main.js`-ben (import bootstrap, icons):
```js
//main.js
//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"
```


# Gyerek - Gyerek kommunikáció
## Telepítés előkészítés
1. Mitt eseménykibocsájtó csomag telepítése: `npm i mitt`

2. Mitt csomag importálása (`main.js`):

```js
//main.js
//Integrálja a mitt eseménykibocsátó könyvtárat a Vue 3 alkalmazással
//egy emitter példány létrehozásával, 
//amely globálisan elérhetővé teszi a Vue alkalmazáspéldányon keresztül.


import { createApp } from 'vue'
//mitt import
import mitt from 'mitt'
import App from './App.vue'

//emittet objektum (példány) létrehozása
const emitter = mitt()

const app = createApp(App)

//Emitter bejegyzése az app.config-ba
app.config.globalProperties.emitter = emitter

app.mount('#app')

```

## mitt kommunikáció
1. feliratkozás az eseményre (Az esemény veve: gyerek_to_gyerek)
Az eseményt bármely komponenseben el lehet kapni
```js
mounted(){
    //A data tartalmaézzza a külött üzenet objektumot
    this.emitter.on("gyerek_to_gyerek", (data) => {
          
        }
    });
```

2. Az esemény kiváltása
Az üzenetet egy objektumba kell csomagolni.
```js
this.emitter.emit("gyerek_to_gyerek", {uzenet: "Ez egy üzenet"});

```