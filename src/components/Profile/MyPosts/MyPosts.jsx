import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Posts from "./Posts/Posts";






const MyPosts = (props) => {

    const newPostElement = React.createRef();
    const postElements = props.posts.map( p => (<Posts message={p.message} likes={p.likes} />));
    const addPost = () => {

        props.addPost()
        props.updateNewPostText('');
    };
    const addPostChange = () => {
        const text = newPostElement.current.value;
        props.newPostText(text);

    }

  return (
    <div className={style.newPosts}>
      <textarea name="post" id="" cols="15" rows="5" ref={newPostElement} onChange={addPostChange} value={props.newPostText} />
      <div>
        <button onClick={ addPost }>Add</button>
      </div>
        {postElements}
    </div>
  );
};
export default MyPosts;