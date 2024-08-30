import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import {
  CommentAuthor,
  CommentForm,
  CommentInput,
  CommentItem,
  CommentList,
  CommentText,
  CommentsContainer,
  SubmitButton

} from './ComentarySld'

// Styled components

// Props interface

interface comments{
  id: Key | null | undefined; user: { nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}


interface CommentsSectionProps {
  movieId: any | undefined;
}




import interaction from '../../services/interaction';

export function CommentsSection(props:CommentsSectionProps){
  const [comments, setComments] = useState <Array<any> >([]);
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
        {comments.message ? <div>{comments.message}</div> :comments.map((comment: comments) => (
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
