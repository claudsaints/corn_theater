import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Footer, Nav, Sdiv, Loading } from "../components/index";
import { ContextoHome } from "../contexts/contextHome";
import movie from "../services/movie";

export default function Search() {
  const { data, setData } = useContext(ContextoHome);
  const [loading, setLoading] = useState(true);

  const { query } = useParams();

  //caregamento da api

  const tmovies = movie.buscar;
  useEffect(() => {
    tmovies(query, setData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //definir loading booleano
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />

      <Sdiv>
        {data.map((obj: any) =>
          obj.poster_path ? <Card moviedata={obj} /> : null
        )}
      </Sdiv>
      <Footer>claudio</Footer>
    </>
  );
}
