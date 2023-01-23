import React from "react";
import style from './style.module.scss';

const Header = () => (
    <div className={style.header}>
        <h1>Mystery Educator</h1>
        <ul className={style.navList}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/books'>The Devs</NavLink>
            <NavLink href='http://127.0.0.1:5500/index.html'>JAC Enterprises</NavLink>
        </ul>
    </div>
);

export default Header;