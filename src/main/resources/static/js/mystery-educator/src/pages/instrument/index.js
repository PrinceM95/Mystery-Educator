import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const InstrumentPage = () => {

    const { id } = useParams();
    const [instrument, setInstrument] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstrumentData = async () => {
            const result = await Axios(`http://localhost:8080/api/instruments/${id}`);
            setInstrument(result.data); 
        }
        
        if (instrument) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !instrument && fetchInstrumentData();
        }, 100);

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [instrument])
    
    return (
        <div className={style.content}>
            
            {loading ? <h3>Loading...</h3> : 
                <div key={instrument.id}>
                    <h1 className={style.instrument_name}>{instrument.instrumentName}</h1> 
                    <p className={style.description}>Description: {instrument.description}</p>
                    <h3 className={style.famous_artist}>{instrument.famousArtist}</h3>
                </div>
                
            }
        </div>
    );
}



export default InstrumentPage;