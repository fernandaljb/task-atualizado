//instância (configurações) do Axio 
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  headers: {
    // ✔️ Cole aqui o seu token pessoal!
    // Acesse trainee.fidelis.workers.dev/inicio para pegar o seu.
    'Authorization': 'Bearer d49abdb7-b5f4-4fb6-96f6-9b8582ed6167',
    'Content-Type': 'application/json',
  },
});