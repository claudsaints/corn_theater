import { useState, useEffect, useContext } from 'react';
import { Card,  Div,ProfileHeader, NavStyle } from '../index'
import interaction from '../../services/interaction';
import { ContextoHome } from '../../contexts/contextHome';
import {Movie} from '../../types'

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
      <Div>
          {favoritesData? favoritesData.map((data) => <Card moviedata={data} key={data.movieId}  />):null}
      </Div>
     
    </>
  );
};

export default Profile;
