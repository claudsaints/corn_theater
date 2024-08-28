import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #0080ff;
  margin-bottom: 1rem;
`;

const FavoritesContainer = styled.div`
  margin-bottom: 2rem;
`;

const CommentContainer = styled.div`
  margin-bottom: 2rem;
`;

const FavoriteCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentAuthor = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

const CommentText = styled.p`
  margin: 0.5rem 0 0;
  color: #555;
`;

// Props interface
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Comment {
  id: number;
  author: string;
  text: string;
}

const Profile = () => {
  const [user, setUser] = useState<{ name: string; profilePicture: string } | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  
  useEffect(() => {
    // Fetch user profile
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => setUser(data));

    // Fetch user favorites
    fetch('/api/user/favorites')
      .then(response => response.json())
      .then(data => setFavorites(data));

    // Fetch user comments
    fetch('/api/user/comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <ProfileContainer>
      {user && (
        <>
          <ProfileHeader>
            <ProfilePicture src={user.profilePicture} alt={`${user.name}'s profile`} />
            <ProfileName>{user.name}</ProfileName>
          </ProfileHeader>
          
          <FavoritesContainer>
            <SectionTitle>Filmes Favoritos</SectionTitle>
            {favorites.map(movie => (
              <FavoriteCard key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <h3>{movie.title}</h3>
              </FavoriteCard>
            ))}
          </FavoritesContainer>
          
          <CommentContainer>
            <SectionTitle>Comentários</SectionTitle>
            {comments.map(comment => (
              <CommentCard key={comment.id}>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </CommentCard>
            ))}
          </CommentContainer>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
