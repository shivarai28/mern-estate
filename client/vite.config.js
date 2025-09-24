import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
     
        secure: false,
      
      }
    }
  },
  plugins: [react(),
     tailwindcss()
    ],
     
})
