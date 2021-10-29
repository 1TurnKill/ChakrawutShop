import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import xmlLikeAPro from './plugins/xmlLikeAPro'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [xmlLikeAPro(),react()]
})
