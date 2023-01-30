import React, {useEffect, useState} from "react";
import style from './style.module.scss'
import guitar from '../../assets/acoustic-guitar.png';
import piano from '../../assets/piano.png';
import violin from '../../assets/violin.png';
import drums from '../../assets/drums.png';
import flute from '../../assets/flute.png';

import Axios from 'axios';

const InstrumentsPage = () => {

    const [instruments, setInstruments] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchInstrumentsData = async () => {
            const result = await Axios('http://localhost:8080/api/instruments');
            setInstruments(result.data);
        }

        if(instruments) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !instruments && fetchInstrumentsData();
        }, 1000);

        return () => clearTimeout(timer);

    }, [instruments]);

    return (
        <div>
        <div className={style.instrument_icons}>
        <h2>MUSIC EXPLORATION</h2>
        <div class={style.container}>
            <span><img src={guitar} class={style.image} alt="guitar"></img></span>
            <div class={style.overlay}>
            <div class={style.projeto1}>GUITAR</div>
        </div>
        </div>

        <div class={style.container}>
            <span><img src={piano} className={style.image} alt="piano" class="image"></img></span>
            <div class={style.overlay}>
            <div class={style.projeto1}>PIANO</div>
        </div>
        </div>

        <div class={style.container}>
            <span><img src={violin} className={style.image} alt="violin" class="image"></img></span>
            <div class={style.overlay}>
            <div class={style.projeto1}>VIOLIN</div>
        </div>
        </div>

        <div class={style.container}>
            <span><img src={drums} className={style.image} alt="drums" class="image"></img></span>
            <div class={style.overlay}>
            <div class={style.projeto1}>DRUMS</div>
        </div>
        </div>

        <div class={style.container}>
            <span><img src={flute} className={style.image} alt="flute" class="image"></img></span>
            <div class={style.overlay}>
            <div class={style.projeto1}>FLUTE</div>
        </div>
        </div>
    </div>
            {/* {loading ? <h3>Loading...</h3> : instruments.map(instrument => (
                <a key={instrument.id} href={`instruments/${instrument.id}`}>
                    <p>{instrument.instrumentName}</p>
                </a>
            ))} */}
        </div>  
    );
}


export default InstrumentsPage;