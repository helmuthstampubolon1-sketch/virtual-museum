import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 

export default defineConfig(({ command }) => ({ 

  plugins: [react()], 

  base: command === 'build' ? '/virtual-museum/' : '/', 

  build: { 

    target: 'esnext', 

    cssCodeSplit: true, 

    assetsInlineLimit: 4096, 

    chunkSizeWarningLimit: 1000, 
  } 
}))
