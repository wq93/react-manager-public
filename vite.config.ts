import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {}
  },
  server: {
    host: 'localhost',
    port: 8000,
    proxy: {
      '/api': 'http://api-driver.marsview.cc'
    },
  },
  plugins: [react()],
})
