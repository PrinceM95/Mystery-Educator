import React from 'react';
import style from './style.module.scss';

const HomePage = () => {
    return (
        <div className={style.home}>
            <div id={style.page_title}> Jac's Mystery Educator </div>
            <div id={style.page_quote}> "Vincit Qui Se Vincit" </div>
        </div>
        
    );

// new CircleType(document.getElementById('demo2'))
//     .dir(-1)
//     .radius(384);

}

export default HomePage;