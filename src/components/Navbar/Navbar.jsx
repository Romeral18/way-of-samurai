import React from 'react'
import './Navbar.module.css'
import cl from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

  return (
    <nav className={cl.nav}>
        <div>
            <NavLink exact to='/profile'>Profile</NavLink>
        </div>
        <div>
            <NavLink exact to='/messages'>Dialogs</NavLink>
        </div>
        <div>
            <NavLink exact to='/news'>News</NavLink>
        </div>
        <div>
            <NavLink exact to='/music'>Music</NavLink>
        </div>
        <div>
            <NavLink exact to='/settings'>Settings</NavLink>
        </div>
    </nav>
  );
};
export default Navbar;
