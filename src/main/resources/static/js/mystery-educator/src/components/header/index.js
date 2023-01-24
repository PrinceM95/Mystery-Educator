import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => (
    <div className={style.header}>
        <h1>Mystery Educator</h1>
        <ul className={style.navList}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contact'>The Devs</NavLink>
            <a href='http://127.0.0.1:5500/index.html' target='_blank'>JAC Enterprises</a>
        </ul>
    </div>
);

export default Header;