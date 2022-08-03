import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { LikeCount } from "./LikesCountComponent"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {


function handleDeleteComment(){
onDeleteComment(content)
}


return(
    <div className={styles.comment}>
        <Avatar
        hasBorder={false}
        src="https://github.com/luanhenriquee.png"
        />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}> 
            <header>
                <div className={styles.authorAndTime}>
                     <strong> Luan Henrique</strong>
                     <time title="26 in July a 08:43 " dateTime="5/11/2022 08:43:30"> 1 hour later</time>
                </div>

                <button onClick={handleDeleteComment} title="delete comment">
                         <Trash size={24}/>
                </button>
            </header>


              <p>{content}</p>
            </div>
            <footer>
                <LikeCount
                image={<ThumbsUp/>}
                titleCount={"Like"}
                />
            </footer>
        </div>
    </div>
 )
}