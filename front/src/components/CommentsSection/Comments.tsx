import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const CommentsContainer = styled.div`
  margin: 2rem 0;
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
  margin: 0;
  font-size: 1rem;
`;

const CommentText = styled.p`
  margin: 0.5rem 0 0;
`;

// Props interface
interface Comment {
  id: number;
  author: string;
  text: string;
}

interface CommentsSectionProps {
  movieId: string;
}

const CommentsSection = ({ movieId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  
  useEffect(() => {
    // Fetch comments for the movie from API
    fetch(`/api/comments?movieId=${movieId}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [movieId]);
  
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.trim() === '') return;

    // Post new comment to API
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movieId, text: newComment })
    })
      .then(response => response.json())
      .then(data => {
        setComments(prevComments => [...prevComments, data]);
        setNewComment('');
      });
  };

  return (
    <CommentsContainer>
      <CommentForm onSubmit={handleSubmit}>
        <CommentInput
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Escreva um comentário..."
        />
        <SubmitButton type="submit">Enviar Comentário</SubmitButton>
      </CommentForm>
      <CommentList>
        {comments.map(comment => (
          <CommentItem key={comment.id}>
            <CommentAuthor>Usuário {comment.id}</CommentAuthor>
            <CommentText>{comment.text}</CommentText>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default CommentsSection;
