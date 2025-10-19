import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

const env = loadEnv('all', process.cwd())
console.log(env)
const frontendPort = env.VITE_FRONTEND_PORT ? Number(env.VITE_FRONTEND_PORT) : 5173

const devScheme = env.VITE_BACKEND_SCHEME
const devBackendPort = env.VITE_BACKEND_PORT
const devBackendHost = env.VITE_BACKEND_HOST

const devBackendUrl = `${devScheme}://${devBackendHost}:${devBackendPort}/`

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: frontendPort,
    proxy: {
      '/api/': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      overlay: false,
    },
  },
})
