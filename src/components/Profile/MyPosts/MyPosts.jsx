import React from "react";
import "./MyPosts.module.scss";
import style from "./MyPosts.module.scss";
import Post from "../Post/Post";

const posts = [
    {message: 'Hi, how are you?', likes: '15'},
    {message: "Let's go dance!", likes: '1000'},
    {message: "Let's go dance!", likes: '1000'},
    {message: "Let's go dance!", likes: '1000'},
    {message: "Let's go dance!", likes: '1000'}
]
const postElements = posts.map( p => (<Post message={p.message} likes={p.likes} />));


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
