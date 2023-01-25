import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => (
    <div className={style.header}>
        <h1>JAC ENTERPRISES</h1>
        <ul className={style.navList}>
            <NavLink to='/'>HOME</NavLink>
            <a href='http://127.0.0.1:5500/index.html' target='_blank'>ABOUT </a>
            <NavLink to='/'>BORED</NavLink>
            <NavLink to='/'>INSTRUMENTS</NavLink>
            <NavLink to='/'>NASA</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>

        </ul>
    </div>
);

export default Header;