
import { useNavigate, useParams } from "react-router-dom";
import Movie from "../services/movie";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  MovieSection,
  Saling,
  IconStar,
  IconStarFill,
  Comments} from "../components/index";
import { TmdbData } from "../types";

import interaction from "../services/interaction";
import { ContextoHome } from "../contexts/contextHome";


export default function dataMovie() {
  //parametro url
  const { id } = useParams();

 
  const checkfav = interaction.checkFavorite;
  const removeFav = interaction.removeFavorite;
  const addFav = interaction.saveFavorite;
  const { setLoading} = useContext(ContextoHome);
  const [dataMovie, setDatadataMovie] = useState<TmdbData>();
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);
  

  useEffect(() => {
    const response: Promise<TmdbData> = Movie.buscar_id(id? id:"");
    response.then((data) => {
      setDatadataMovie(data);
    })
    checkfav(id, setBool);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const isFavorite = () => {
    if (bool) {
      removeFav(id);
    } else {
      addFav(id, dataMovie?.title, dataMovie?.poster_path);
    }
  };
  

  return (
    <>
      <MovieSection>
        <Saling
          style={{
            height: "30%",
            flexDirection: "column",
          }}
        >
          <Button onClick={() =>{
            navigate(-1)
            
          }
          }>
            Voltar 
            </Button>
              
                <Button
                bgcolor="#fffff"
                    height="50px"
                    width="100px"
                    onClick={() => {
                    setBool(!bool);
                    isFavorite();
                    }}
                >
                    {bool ? (
                      <IconStarFill />
                    ) : (
                      <IconStar/>
                    )}
          </Button>
        </Saling>

        <img
          src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}
        />
        <div>
          <div>
            <h1>{dataMovie?.title}</h1>
            <h3>Título Original: {dataMovie?.original_title}</h3>
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
