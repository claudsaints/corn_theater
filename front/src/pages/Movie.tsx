
import { Link, useNavigate, useParams } from "react-router-dom";
import movie from "../services/movie";
import { useContext, useEffect, useState } from "react";
import {
  Sbutton,
  Fbutton,
  MovieSection,
  Saling,
  IconStar,
  IconStarFill,
  Comments,
  Footer,
  IconGithub,
  IconLinkedin
} from "../components/index";
import { TmdbData } from "../types";

import interaction from "../services/interaction";
import { ContextoHome } from "../contexts/contextHome";

export default function dataMovie() {
  //parametro url
  const { id } = useParams();

  const tmovie = movie.buscar_id;
  const checkfav = interaction.checkFavorite;
  const removeFav = interaction.removeFavorite;
  const addFav = interaction.saveFavorite;
  const { setLoading} = useContext(ContextoHome);
  const [dataMovie, setDatadataMovie] = useState<TmdbData>();
  const navigate = useNavigate();
  const [bool, setBool] = useState(false);
  if(!dataMovie){
    setLoading(true)
  }

  useEffect(() => {
    tmovie(id, setDatadataMovie);
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
          <Sbutton onClick={() =>{
            navigate(-1)
            
          }
          }>
            Voltar 
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
                      <IconStarFill />
                    ) : (
                      <IconStar/>
                    )}
          </Fbutton>
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

      <Footer>
        
        <Link to="https://github.com/claudsaints">
          <IconGithub/>
        </Link>
        <Link to="https://br.linkedin.com/in/claudio-d-5b78b9260">
          <IconLinkedin/>
        </Link>
        @claudsaints
      </Footer>
    </>
  );
}
