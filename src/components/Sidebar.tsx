import styles from "./Sidebar.module.css"

import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Sidebar(){
return(
<aside className={styles.sidebar}>
                
                <img
                className={styles.cover}
                 src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                />
            
            <div className={styles.profile}>
                 <Avatar
                 src="https://github.com/ArthurFilho.png"
                 />
                <strong> Arthur Filho</strong>
                <span>Web and mobile developer</span>
            </div>
            
    <footer>
        <a href="#"> 
            <PencilLine size={20}/>
            Edite seu perfil
        </a>
    </footer>
            
</aside>
)
}