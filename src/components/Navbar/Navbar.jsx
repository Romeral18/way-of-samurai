import React from 'react'
import style from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = ({links}) => {
    return (
        <nav className={style.nav}>
            <div className={style.nav}>
            {links.map(item => <Item href={item.href} name={item.name}/>)}
            </div>
            <div className={style.friendsList}>
                <div className={style.listName}>Friends</div>
                <div className={style.friendItem}>
                    <div className={style.friendsAvatar}></div>
                    <div className={style.friendsName}></div>
                </div>
                <div className={style.friendItem}>
                    <div className={style.friendsAvatar}></div>
                    <div className={style.friendsName}></div>
                </div>
                <div className={style.friendItem}>
                    <div className={style.friendsAvatar}></div>
                    <div className={style.friendsName}></div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;


const Item = ({href, name}) => {
    return <div className={style.item}>
        <NavLink to={href}>{name}</NavLink>
    </div>
}

