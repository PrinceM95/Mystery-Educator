import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import guitar from '../../assets/guitar.gif';
import piano from '../../assets/piano.gif';
import violin from '../../assets/violin.gif';
import drums from '../../assets/drums.gif';
import flute from '../../assets/flute.gif';

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
        <h2>MUSICAL EXPLORATION</h2>
        {/* <div class={style.container}>
        <h2>GUITAR</h2>
        <span><img src={guitar} class={style.image} alt="guitar"></img></span>
            <div class={style.overlay}>
        </div>
        </div>

        <div class={style.container}>
        <h2>PIANO</h2>
            <span><img src={piano} className={style.image} alt="piano" class="image"></img></span>
            <div class={style.overlay}>
        </div>
        </div>

        <div class={style.container}>
        <h2>VIOLIN</h2>
            <span><img src={violin} className={style.image} alt="violin" class="image"></img></span>
            <div class={style.overlay}>
        </div>
        </div>

        <div class={style.container}>
        <h2>DRUMS</h2>
            <span><img src={drums} className={style.image} alt="drums" class="image"></img></span>
            <div class={style.overlay}>
        </div>
        </div>

        <div class={style.container}>
        <h2>FLUTE</h2>
            <span><img src={flute} className={style.image} alt="flute" class="image"></img></span>
            <div class={style.overlay}>
        </div>
        </div> */}
        </div>

    {/* <div class={style.band}>
            <img src={band} className={style.kid_band} alt="band" class="picture"></img>
        </div> */}
            <div className={style.instrument_section}>
            {loading ? <h3>Loading...</h3> : instruments.map(instrument => (
                <a key={instrument.id} href={`instruments/${instrument.id}`}>
                    <h2>{instrument.instrumentName}</h2>
                </a>
            ))}
            </div>
        </div>  
    );
}


export default InstrumentsPage;