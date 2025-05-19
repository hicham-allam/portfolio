import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()] // ← Force-inject Tailwind
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server:{
    allowedHosts: ["d92a-160-179-184-251.ngrok-free.app"]
  },
})