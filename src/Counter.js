import { useState } from "react";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // console.log("Like", like)
  return (
    <div>
      {/* onClick => camelCase */}
      <button onClick={() => {
        setLike(like + 1);
        console.log("like", like);
      }}>👍{like}</button>


      <button onClick={() => {
        setDislike(dislike + 1);
        console.log("dislike", dislike);
      }}>👎{dislike}</button>


    </div>
  );
}
