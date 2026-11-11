import { useState } from "react";

export default function LikeButton(){
  let [isLiked,setIsliked] = useState(false);
  let [click,setclicks] = useState(0);
  let toggleLike = () => {
    setIsliked(!isLiked);
    setclicks(click+1);
  };

  let likestyles = {color:"red"};

  return(
    <div>
      <p>
        click={click}
      </p>
      <p onClick={toggleLike}>
        {
            isLiked ? (<i className="fa-solid fa-heart" style={likestyles}></i>):( <i className="fa-regular fa-heart"></i>)
        }
      </p>
    </div>
  );
}