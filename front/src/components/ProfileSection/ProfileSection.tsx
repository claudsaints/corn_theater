import { useState, useEffect, useContext } from 'react';
import { Card,  Sdiv,ProfileHeader, Footer,NavStyle, IconGithub, IconLinkedin } from '../index'
import interaction from '../../services/interaction';
import { ContextoHome } from '../../contexts/contextHome';
import {Movie} from '../../types'
import { Link } from 'react-router-dom';



// Props interface


const Profile = () => {
  const {setLoading} = useContext(ContextoHome);
  const [favoritesData, setFavoritesData] = useState<Movie[]>([]);
  const buscar  = interaction.getAllFavorite
  
  useEffect(() => {
    buscar(setFavoritesData)
    setTimeout(() => {
      setLoading(false);
  },1000)
  }, []);
  if(!favoritesData){
    setLoading(true)
  }

  return (
    <>
      <NavStyle>
          <ProfileHeader/>       
      </NavStyle>
      <div style={{
        display:'flex',
        alignItems: 'center',
        justifyItems: 'center',
        marginTop: '70px'
      }}>
        <h1>
          FILMES
          FAVORITOS:
        </h1>
      </div>
      <Sdiv>
          {favoritesData? favoritesData.map((data) => <Card moviedata={data}  />):null}
      </Sdiv>
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
};

export default Profile;
