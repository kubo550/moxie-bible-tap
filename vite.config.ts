import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [eslintPlugin(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
