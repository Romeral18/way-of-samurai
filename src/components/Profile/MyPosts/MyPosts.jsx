import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";
import posts from "./../Profile";


const postElements = posts.map( p => (<Posts message={p.message} likes={p.likes} />));


const MyPosts = () => {
  return (
    <div className={style.newPosts}>
      <textarea name="post" id="" cols="15" rows="5"></textarea>
      <div>
        <button>Add</button>
      </div>
        {postElements}
    </div>
  );
};
export default MyPosts;
