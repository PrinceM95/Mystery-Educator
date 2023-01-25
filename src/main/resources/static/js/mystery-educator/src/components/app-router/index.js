import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home';
import ContactPage from '../../pages/contact';
import InstrumentsPage from '../../pages/instruments';
import BoredPage from '../../pages/bored';
import NasaPage from '../../pages/nasa';
import React from 'react';


const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/instruments'} element={<InstrumentsPage />} />
        <Route exact path={'/bored'} element={<BoredPage />} />
        <Route exact path={'/nasa'} element={<NasaPage />} />
    </Routes>
);

export default PageSwitch;