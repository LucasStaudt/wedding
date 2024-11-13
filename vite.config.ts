import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/wedding/',
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
  },
});
