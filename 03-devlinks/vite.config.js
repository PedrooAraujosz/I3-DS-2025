import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true,//porta de conexão, altere quando necessario
    port:3000,//abre automaticamente o navegador e inicia o server 
    host:true,//Habilitar rede externa
  }
});
