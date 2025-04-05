import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  host: '0.0.0.0',
  allowedHosts: ['kaykaloyni-106.onrender.com']
  },
});
