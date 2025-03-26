import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Nav, Div, Loading, PageHandler } from "../components/index";
import { ContextoHome } from "../contexts/contextHome";
import Movie from "../services/movie";
import { TmdbDefault } from "../types";

export default function Search() {
  const { data, setData, page } = useContext(ContextoHome);
  const [loading, setLoading] = useState(true);

  const { query } = useParams();

  
  useEffect(() => {
    const setMovieData = async () => {
      let topMovies: Promise<TmdbDefault> = await Movie.buscar(query ? query : "", page);
      setData(topMovies);
    };
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setMovieData();
  }, [page]);

  //definir loading booleano
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />

      <Div>
        {data?.results.map((data) =>
          data.poster_path ? <Card moviedata={data} key={data.id} /> : null
        )}
      </Div>
      <PageHandler/>
    </>
  );
}
