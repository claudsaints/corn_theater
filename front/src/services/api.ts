import axios, { AxiosInstance } from 'axios'

const key = import.meta.env.VITE_TMDB_KEY

  export const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3030",
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

  export const userInt: AxiosInstance = axios.create({
    baseURL: "http://localhost:3030",
    headers:{
      "Content-Type": "application/json"  
    }
  })