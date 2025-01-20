import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/human-evolution-diagram/',  // <-- important for GH Pages
  plugins: [react()],
})
