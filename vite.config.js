import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Visual Studio locks files under .vs while indexing; watching them crashes Vite on Windows.
      ignored: ['**/.vs/**'],
    },
  },
})
