import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';


const Header = () => (
    <div className={style.header}>
        <h1><center>JAC ENTERPRISES</center></h1>
        <ul className={style.navList}>
            <NavLink to='/home'>HOME</NavLink>
            <a href='http://127.0.0.1:5500/index.html' target='_blank'>ABOUT </a>
            <NavLink to='/bored'>I'M BORED, HELP!</NavLink>
            <NavLink to='/instruments'>INSTRUMENTS</NavLink>
            <NavLink to='/nasa'>NASA</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
        </ul>
    </div>
);

export default Header;