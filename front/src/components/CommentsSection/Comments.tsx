import { useState, useEffect, useRef} from 'react';
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
 message:string;
 user: {
  nome:string;
 };
 id: string;
 content:string;
 nome:string;

}


interface CommentsSectionProps {
  movieId: any | undefined;
}




import interaction from '../../services/interaction';

export function CommentsSection(props:CommentsSectionProps){
  const [comments, setComments] = useState <comments[] | any>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [btnstatus,setBtnStatus] = useState("Enviar Comentário")

  const inter = interaction.getComments;
  const postar = interaction.saveComment;

  const alterar =() => {
    setBtnStatus("Enviado!!!")
    setTimeout(() => {
      setBtnStatus("Enviar Comentário")
    },1000)
  }
  
  useEffect(() => {
      inter(setComments,parseInt(props.movieId));
  },[comments]);



  
  return (
    <CommentsContainer>
      <CommentForm >
        <CommentInput onChange={(e) => setNewComment(e.target.value)}
      
          placeholder="Escreva um comentário..."
        />
        <SubmitButton  onClick={() => {
          postar(parseInt(props.movieId),newComment)
          alterar();
        }}>{btnstatus}</SubmitButton>
      </CommentForm>
      <CommentList>
        {comments && comments.message ? <div>{comments.message}</div> :comments.map((comments:comments) => (
          <CommentItem key={comments.id}>
            <CommentAuthor>{comments.user.nome}</CommentAuthor>
            <CommentText>{comments.content}</CommentText>
          </CommentItem>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default CommentsSection;
