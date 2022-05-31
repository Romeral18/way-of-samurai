import React from 'react'
import './Navbar.module.css'
import cl from './Navbar.module.css'


const Navbar = (props) => {
  return (
    <nav className={cl.nav}>

        <div><a href='/profile'>Profile</a></div>
        <div><a href='/messages'>Messages</a></div>
        <div><a href='/news'>News</a></div>
        <div><a href='/music'>Music</a></div>
        <div><a href='/settings'>Settings</a></div>



    </nav>
  );
};
export default Navbar;
