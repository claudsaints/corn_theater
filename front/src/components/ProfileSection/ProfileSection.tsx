import { useState, useEffect } from 'react';
import { Card,  Sdiv,ProfileHeader, Saling } from '../index'
import interaction from '../../services/interaction';




// Props interface
interface Movie {
  imgLink:string;
  movieId:number;
  title:string;

}


const Profile = () => {
  const [favoritesData, setFavoritesData] = useState<Movie[]>([]);
  const buscar  = interaction.getAllFavorite
  
  useEffect(() => {
    buscar(setFavoritesData)
  }, []);

  return (
    <>
      <ProfileHeader/>
      <h1>
        FILMES
        FAVORITOS
      </h1>
      <Sdiv>
          {favoritesData? favoritesData.map((data) => <Card moviedata={data}  />):null}
      </Sdiv>
    </>
  );
};

export default Profile;
