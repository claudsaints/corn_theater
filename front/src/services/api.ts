import axios, { AxiosInstance } from 'axios'

const key = import.meta.env.VITE_TMDB_KEY

export const api: AxiosInstance = axios.create({

    headers: {
      "Content-Type": "application/json",
      
    },
  });
  
  export const tmdb: AxiosInstance = axios.create({
    headers: {
      "Accept": "application/json",
      "Authorization": key
    },
  });
  