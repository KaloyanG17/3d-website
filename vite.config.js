import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // In production vercel.json rewrites /lab to the lab project; do the same locally.
    proxy: {
      '/lab': { target: 'https://kaloyan-lab.vercel.app', changeOrigin: true },
    },
  },
})
