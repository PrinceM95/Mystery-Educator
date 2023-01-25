import React from 'react';
import style from './style.module.scss'
import guitar from '../../assets/acoustic-guitar.png';
import piano from '../../assets/piano.png';
import violin from '../../assets/violin.png';
import drums from '../../assets/drums.png';
import flute from '../../assets/flute.png';

const NasaPage = () => {

    return (
        <div class = "nasa_icons">
            {/* <h2>This is the Nasa page</h2> */}
            <div><img src={guitar} className={style.icon_img} alt="Nasa Icon 1"></img></div>
            <div><img src={piano} className={style.icon_img2} alt="Nasa Icon 1"></img></div>
            <div><img src={violin} className={style.icon_img3} alt="Nasa Icon 1"></img></div>
            <div><img src={drums} className={style.icon_img4} alt="Nasa Icon 1"></img></div>
            <div><img src={flute} className={style.icon_img5} alt="Nasa Icon 1"></img></div>
        </div>
    );
}

export default NasaPage;