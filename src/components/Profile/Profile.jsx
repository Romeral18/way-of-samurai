import React from 'react'
import './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import BackgroundPhoto from './BackgroundPhoto/BackgroundPhoto'
import Cap from './Cap/Cap'



const Profile = (props) => {
  return (
    <div>
        done
      <BackgroundPhoto />
      <Cap />
      <MyPosts posts={props.posts} />
    </div>
  );
};
export default Profile;

