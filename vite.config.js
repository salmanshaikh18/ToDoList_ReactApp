import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  devServer: {
    allowedHosts: 'all',
  },
  server: {
    host: "0.0.0.0",
  },
  plugins: [react()],
})
