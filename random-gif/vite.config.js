import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ,tailwindcss()
    ,react()],
    define:{
      'process.env.REACT_APP_API_KEY':JSON.stringify(process.env.REACT_APP_API_KEY) 

    }
})
