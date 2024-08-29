import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const CommentsContainer = styled.div`
  margin: 2rem 0;
  width: 90%;
  padding: 1rem;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const CommentInput = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #0080ff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #66b3ff;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const CommentAuthor = styled.h4`
  color: white;
  margin: 0;
  font-size: 1rem;
`;

const CommentText = styled.p`
  color: darkgrey;
  margin: 0.5rem 0 0;
`;

// Props interface
interface Comment {
  id: number;
  content: string;
}

interface CommentsSectionProps {
  movieId: string;
}



import interaction from '../../services/interaction';
export function CommentsSection(props:CommentsSectionProps){
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState<string>('');
  
  const inter = interaction.getComments;
  const postar = interaction.saveComment;
  
  useEffect(() => {
      inter(setComments,parseInt(props.movieId));
  },[]);

  
  return (
    <CommentsContainer>
      <CommentForm >
        <CommentInput onChange={(e) => setNewComment(e.target.value)}
      
          placeholder="Escreva um comentário..."
        />
        <SubmitButton  onClick={() => {
          postar(parseInt(props.movieId),newComment)
       
        }}>Enviar Comentário</SubmitButton>
      </CommentForm>
      <CommentList>
        {comments.message ? <div>{comments.message}</div> :comments.map(comment => (
          <CommentItem key={comment.id}>
            <CommentAuthor>{comment.user.nome}</CommentAuthor>
            <CommentText>{comment.content}</CommentText>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default CommentsSection;