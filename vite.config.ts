import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/geoview-demo/",
  server:{
    port: 8080,
  },
  resolve: {
    alias: {
      '@': '/src',
  },
},
})  
