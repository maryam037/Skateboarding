import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
export default defineConfig({
  base: '/Skateboarding/', // Add this line
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./index.html"),
    },
  },
})