import { tmdb } from "./api";
import { tryCatch } from "../utils/tryCatch";
import { TmdbDefault } from "../types";

class Movie {
  async buscar(query: string,page?:number):Promise<any> {
    const payload = {
      method: "get",
      url: `/search/movie`,
      params: {
        query: query,
        page: page? page : 1,
        language: "pt-BR",
      },
    }
    const {data, error} = await tryCatch<TmdbDefault>(
      tmdb(payload)
    );

    if(error) {
      console.log(error)
      return
    }; 
    return data
  }
  async buscar_id(id: string):Promise<any> {
    const {data,error} = await tryCatch(
      tmdb.get(`/movie/${id}?language=pt-BR`
    )) ;

    if(error) {

      return
      
    }; 

    return data
  
  }
  async top_movie(page?:number): Promise<any>{
   const {data, error} = await tryCatch<TmdbDefault>(tmdb.get(`/movie/top_rated?language=pt-BR&page=${page? page : 1}`))

   
   if(error) {
    console.log(error)
    return 
    
  }; 

   return data
  }
};

export default new Movie;