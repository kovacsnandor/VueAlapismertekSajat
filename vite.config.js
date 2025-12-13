import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  //Ebbe a mappába fordítja a webalkalmazást
  //ilyenkor az apach szerver: www/proba mappába kell tenni
  build: {
    outDir: './dist/proba',
  },

  //Ez egy belső környezeti változó, ami:
  //npm run dev hatására: development
  //npm run build hatására: production
  //A base: mondja meg, hogy honnan idul a projekt
  //developent módban: / -> src mappa
  //product módban: a dist/proba mappa, vagy élesben a szerveren: www/proba (a lefordított alakalmazás)
  base: process.env.NODE_ENV === 'development' ? '/' : '/proba/',

})
