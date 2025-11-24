import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ВАЖНО: base = '/ИМЯ_РЕПОЗИТОРИЯ/'
export default defineConfig({
  plugins: [react()],
  base: '/nskplast/TURAN-NEW-GEMINI/'
})
