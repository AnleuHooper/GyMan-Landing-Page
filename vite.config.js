import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacidad: resolve(__dirname, 'aviso-de-privacidad.html'),
        borrado: resolve(__dirname, 'solicitud-borrado-datos.html'),
      },
    },
  },
  server: {
    proxy: {
      '/api/distancematrix': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/distancematrix/, '/maps/api/distancematrix/json'),
      }
    }
  }
});
