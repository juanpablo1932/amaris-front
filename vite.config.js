import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    global:'window'
  },
  envDir: 'environments',
  optimizeDeps: {
    disabled: false,
  },
  publicDir:'public',
  server: {
    host: 'localhost',
    port: 3001,
    strictPort: true
  }
})