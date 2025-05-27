// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        quienes_somos: 'quienes_somos.html',
        blog: 'blog.html',
        contact: 'contacto.html',
        curso1:'curso1.html',
        curso2:'curso2.html',
        login:'login.html',
        noticia1:'noticia1.html',
        noticia2:'noticia2.html',
        registro:'registro.html',
        legal:'aviso_legal.html'
        // Añade aquí todos los html que quieras incluir
      }
    }
  },
  base: '/conquer-microsite.github.io/'
})
