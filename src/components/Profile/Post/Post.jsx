import React from "react";
import "./Post.module.css";
import cl from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://sun9-15.userapi.com/s/v1/if2/RqFaebfWu7K8Tcx9vOiBFQMJhH3klxDdrRhzlObjdCp5V7bd8AlYpLN-bLl1bL6quiBCxTlh4I-OSv4NYG_952Rp.jpg?size=1280x848&quality=96&type=album"
          alt=""
          className={cl.avatar}
        />
        {props.messange}
      </div>
      <div>Likes: {props.likes}</div>
    </div>
  );
};
export default Post;
