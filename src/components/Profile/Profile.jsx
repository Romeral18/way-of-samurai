import React from 'react'
import './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import BackgroundPhoto from './BackgroundPhoto/BackgroundPhoto'
import Cap from './Cap/Cap'

const posts = [
    {message: "Hi, how are you?", likes: "15"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"},
    {message: "Let's go dance!", likes: "1000"}
]

const Profile = () => {
  return (
    <div>
        done
      <BackgroundPhoto />
      <Cap />
      <MyPosts posts={posts} />
    </div>
  );
};
export default Profile;

