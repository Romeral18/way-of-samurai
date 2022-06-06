import React from 'react'
import './Navbar.module.css'
import cl from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

  return (
    <nav className={cl.nav}>
        <div className={cl.item}>
            <NavLink activeClassName={cl.active} to='/profile'>Profile</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink activeClassName={cl.active} to='/messages'>Dialogs</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink activeClassName={cl.active} to='/news'>News</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink activeClassName={cl.active} to='/music'>Music</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink activeClassName={cl.active} to='/settings'>Settings</NavLink>
        </div>
    </nav>
  );
};
export default Navbar;
