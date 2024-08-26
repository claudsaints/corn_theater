import { tmdb } from "./api"

export default new class Movie{
    async buscar(query:string,fun:CallableFunction) {
      tmdb({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
          query: query,
          language: 'pt-BR'

        }
      }).then((res) => {
          fun(res.data.results)
      }).catch((err)=> {
        console.log(err)

      })

    }
    async buscar_id(id:string | undefined,fun:CallableFunction) {
      tmdb.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`).then((res) => {
          fun(res.data)
      }).catch((err)=> {
        console.log(err)

      })

    }


}