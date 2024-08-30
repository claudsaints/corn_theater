import { useState, useEffect } from 'react';




// Props interface
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}


const Profile = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  
  useEffect(() => {
  
  }, []);

  return (
    <>
    </>
  );
};

export default Profile;
