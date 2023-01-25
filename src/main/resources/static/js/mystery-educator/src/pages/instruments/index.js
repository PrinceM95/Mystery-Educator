import React, {useEffect, useState} from "react";

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
            <h2>Our Instruments Page</h2>
            {loading ? <h3>Loading...</h3> : instruments.map(instrument => {
                <a key={instrument.id} href={`instruments.${instrument.id}`}>
                    <p>{instrument.instrumentName}</p>
                </a>
            })}
        </div>
    );

}

export default InstrumentsPage;