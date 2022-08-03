import { format , formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/esm/locale/pt-BR/index.js"

import styles from "./Post.module.css"

import { Avatar } from "./Avatar"

import { Comment } from "./Comment"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Heart } from "phosphor-react"
import { LikeCount } from "./LikesCountComponent"

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
  }
  
  interface Content {
    type: string;
    content: string;
  }
  
  interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
  }

export function Post({author, publishedAt, content}: PostProps ){

    const [comments, setComments] = useState ([
       "Post muito top, hein?!"
    ]);
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR, 
    })

    const publishedDateRelativeToNow = formatDistanceToNow( publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
       event.preventDefault()

       setComments([...comments, newCommentText]);

       setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment =>{
        return comment != commentToDelete; 
        })

   setComments(commentsWithoutDeletedOne);
    }

    function handNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

return(
<article className={styles.post}>

    <header>

        <div className={styles.author}>
            <Avatar
            src={author.avatarUrl}
            />
            <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
        </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>

    </header>


    <div className={styles.content}>
    {content.map(item => {
        if (item.type === 'paragraph'){
            return <p key={item.content}>{item.content}</p>
        }else if(item.type === 'link'){
            return <p key={item.content}><a href="#">{item.content}</a></p>
        }
    })}
    <footer>
    <LikeCount
    image={<Heart/>}
    titleCount={"Amei"}
    />
    </footer>
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
    <strong> Deixe seu feedback</strong>

    <textarea
    name="comment"
    placeholder="Deixe um comentário"
    value={newCommentText}
    onChange={handleNewCommentChange}
    onInvalid={handNewCommentInvalid}
    required
    />
    
        <footer>
        <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
    </form>
    <div className={styles.commentList}>
        {comments.map(comment => {
            return (
            <Comment 
                key={comment} 
                content={comment}
                onDeleteComment={deleteComment}
            />
           )
    })}
    </div>
</article>
)

};