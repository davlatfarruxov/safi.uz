import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:5100',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://localhost:5100',
        changeOrigin: true
      }
    }
  },

	 preview: {
    host: true,
    port: 4174,
    allowedHosts: ['admin.safi-h.uz', 'www.admin.safi-h.uz'],

  preview: {
    port: 3001,
    host: true

  }
})
