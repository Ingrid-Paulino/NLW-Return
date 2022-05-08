import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost:3333', // endereço base do meu backend
  baseURL: import.meta.env.VITE_API_URL, // com variavel de ambiente. No vite é assim que se importa a variavel

})