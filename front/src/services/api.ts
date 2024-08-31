import axios, { AxiosInstance } from 'axios'

const key = import.meta.env.VITE_TMDB_KEY
const url = import.meta.env.VITE_URL
const {token} = localStorage

  export const api: AxiosInstance = axios.create({
    baseURL: url,
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
    baseURL: url,
    headers:{
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"  
    }
  })