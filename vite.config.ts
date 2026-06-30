import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite.
// A propriedade base é necessária porque o projeto será publicado no GitHub Pages
// dentro de um subdiretório com o mesmo nome do repositório.
export default defineConfig({
  plugins: [react()],
  base: '/tarefa-4-frontend-formulario-pnp/',
});