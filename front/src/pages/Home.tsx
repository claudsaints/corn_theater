import { useContext, useEffect } from "react";
import { Card, Nav, Saling, Div, PageHandler } from "../components/index";
import { ContextoHome } from "../contexts/contextHome";
import { Link } from "react-router-dom";
import movie from "../services/movie";
import { TmdbDefault } from "../types";

export default function Home() {
  const {setData,page,data} = useContext(ContextoHome);

  useEffect(() => {
    const setMovieData = async() => {
          let topMovies:Promise<TmdbDefault> = await movie.top_movie(page);
          setData(topMovies)
    }
    setMovieData()
  },[page])

  const isauth = localStorage.getItem("token")
  if(!isauth){
    return (
      <Saling>
        <h1>Usuário Não Autenticado</h1>
        <span >
          <Link className="spanBad" to="/Login" >Realize o Login para acessar clicando aqui</Link>
        </span>
      </Saling>

    )
  }

  return (
    <>
      <Nav />
      <Div>
        {data?.results.map((data) => (data.poster_path ? <Card moviedata={data} key={data.id}/> : null))}
      </Div>
      <PageHandler/>
    </>
  );
}
