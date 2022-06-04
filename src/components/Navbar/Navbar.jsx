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
    </nav>
  );
};
export default Navbar;
