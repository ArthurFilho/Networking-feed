import { useState } from "react"

interface LikeCountProps { 
    image: any;
    titleCount: string;
}

export function LikeCount({image, titleCount}: LikeCountProps ){
 
    const [likeCount, setLikeCount] = useState(0);
 
    function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1
        });
    }
  

    return(
        <button onClick={handleLikeComment}>
        {image}
        {titleCount}
        <span>{likeCount}</span>
        </button>
    )
}
