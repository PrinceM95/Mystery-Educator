import React, {useEffect, useState} from "react";
import style from './style.module.scss';
import guitar from '../../assets/guitar.gif';
import piano from '../../assets/piano.gif';
import trumpet from '../../assets/trumpet.gif';
import cello from '../../assets/cello.gif';

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
        </div>
            <div className={style.instrument_section}>
            {loading ? <h3>Loading...</h3> : instruments.map(instrument => (
                <a key={instrument.id} href={`instruments/${instrument.id}`}>
                    <h2>{instrument.instrumentName}</h2>
                </a>
            ))}
            </div>
            <div>
            <span><img src={piano} className={style.image1} alt="piano"></img></span>
            <span><img src={guitar} className={style.image2} alt="guitar"></img></span>
            <span><img src={trumpet} className={style.image3} alt="trumpet"></img></span>
            <span><img src={cello} className={style.image4} alt="cello"></img></span>
            </div>
        </div>  
    );
}

export default InstrumentsPage;