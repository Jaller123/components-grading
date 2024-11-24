import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.js', // Path to your entry point
      name: 'cartify-frontend',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Externalize React to avoid duplicate instances
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
