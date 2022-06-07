import React from 'react'
import style from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = ({links}) => {
    return (
        <nav className={style.nav}>
            {links.map(item => <Item href={item.href} name={item.name}/>)}
        </nav>
    );
};
export default Navbar;


const Item = ({href, name}) => {
    return <div className={style.item}>
        <NavLink to={href}>{name}</NavLink>
    </div>
}

