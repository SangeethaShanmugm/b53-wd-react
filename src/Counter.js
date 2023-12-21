import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // console.log("Like", like)
  return (
    <div>

      <IconButton aria-label="likeBtn" color="primary" onClick={() => {
        setLike(like + 1);
        console.log("like", like);
      }}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton aria-label="dislikeBtn" color="error" onClick={() => {
        setDislike(dislike + 1);
        console.log("dislike", dislike);
      }} >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>


      {/* onClick => camelCase */}
      {/* <button >👍{like}</button> */}

      {/* <button onClick={() => {
        setDislike(dislike + 1);
        console.log("dislike", dislike);
      }}>👎{dislike}</button> */}


    </div>
  );
}
