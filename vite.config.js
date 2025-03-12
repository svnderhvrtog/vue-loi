import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    proxy: {
      '/api': 'https://my-json-server.typicode.com/svnderhvrtog/vue-loi/inspections',  // Proxy setup
    }
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
})