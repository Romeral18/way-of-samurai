import React from "react";
import "./MyPosts.module.css";
import cl from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
  return (
    <div className={cl.newPosts}>
      <textarea name="post" id="" cols="15" rows="5"></textarea>
      <button>Add</button>
      <Post messange="Hi, how are you?" likes="15" />
      <Post messange="Let's go dance!" likes="1000" />
    </div>
  );
};
export default MyPosts;
