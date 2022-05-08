import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
  // Arquivo de configuração que indica que ele esta usando o plugin do react.
export default defineConfig({
  plugins: [react()]
})
