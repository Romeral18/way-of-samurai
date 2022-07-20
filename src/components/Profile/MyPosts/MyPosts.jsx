import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";






const MyPosts = (props) => {

    const postElements = props.posts.map( p => (<Posts message={p.message} likes={p.likes} />));
    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text)
    };
    const newPostElement = React.createRef();


  return (
    <div className={style.newPosts}>
      <textarea name="post" id="" cols="15" rows="5" ref={newPostElement} ></textarea>
      <div>
        <button onClick={ addPost }>Add</button>
      </div>
        {postElements}
    </div>
  );
};
export default MyPosts;
