import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'), // Set scss folder as an alias
    },
  },
});