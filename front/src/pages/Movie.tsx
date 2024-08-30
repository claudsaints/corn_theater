
import { Link, useParams } from "react-router-dom";
import movie from "../services/movie";
import { useEffect, useState } from "react";
import {
  Sbutton,
  Fbutton,
  MovieSection,
  Loading,
  Saling,
  IconStar,
  IconStarFill,
  Comments
} from "../components/index";
import { TmdbData } from "../types";

import interaction from "../services/interaction";

export default function dataMovie() {
  //parametro url
  const { id } = useParams();

  const tmovie = movie.buscar_id;
  const checkfav = interaction.checkFavorite;
  const removeFav = interaction.removeFavorite;
  const addFav = interaction.saveFavorite;

  const [dataMovie, setDatadataMovie] = useState<TmdbData>();
  const [loading, setLoading] = useState(true);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    tmovie(id, setDatadataMovie);
    checkfav(id, setBool);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const isFavorite = () => {
    if (bool) {
      removeFav(id);
    } else {
      addFav(id, dataMovie?.title, dataMovie?.poster_path);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <MovieSection>
        <Saling
          style={{
            height: "30%",
            flexDirection: "column",
          }}
        >
          <Sbutton>
            <Link to="/Home">Voltar </Link>
            </Sbutton>
              
                <Fbutton
                    height="50px"
                    width="100px"
                    onClick={() => {
                    setBool(!bool);
                    isFavorite();
                    }}
                >
                    {bool ? (
                    <IconStar/>
                    ) : (
                    <IconStarFill />
                    )}
          </Fbutton>
        </Saling>

        <img
          src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}
        />
        <div>
          <div>
            <h1>{dataMovie?.title}</h1>
            <h3>Titulo Original: {dataMovie?.original_title}</h3>
            <p>Tempo de exibição: {dataMovie?.runtime} minutos</p>
            <p>Data de lançamento: {dataMovie?.release_date}</p>
          </div>
          <div>
            <h1>Overview</h1>
            <p>{dataMovie?.overview}</p>
          </div>
        </div>
      </MovieSection>

      <Comments movieId={id}  />
    </>
  );
}
