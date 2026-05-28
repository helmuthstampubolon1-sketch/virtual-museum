import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 

export default defineConfig({ 

  plugins: [react()], 

  base: '/virtual-museum/', 

  build: { 

    target: 'esnext', 

    cssCodeSplit: true, 

    assetsInlineLimit: 4096, 

    chunkSizeWarningLimit: 1000, 
  } 
}) 
