import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/colorquest/', // This matches your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
