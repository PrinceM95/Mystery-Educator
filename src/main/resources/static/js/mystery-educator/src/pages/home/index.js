import React from 'react';
import style from './style.module.scss';
import star from '../../assets/mag-glass.png';
import logo from '../../assets/slides.gif';

const HomePage = () => {

    return (
        <div className={style.home}>
            {/* <div id={style.page_quote}> "Vincit Qui Se Vincit" </div> */}
            <img src={star} className={style.star_img} alt="shooting star"></img>
            <img src={logo} className={style.logo} alt="logo"></img>
        </div>
    ); 
}

export default HomePage;