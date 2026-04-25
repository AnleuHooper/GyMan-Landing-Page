import { defineConfig } from 'vite';

export default defineConfig({
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
