import { Route, Routes } from 'react-router-dom';

import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home'
import InstrumentsPage from '../../pages/instruments';
import NasaPage from '../../pages/nasa';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/instruments'} element={<InstrumentsPage />} />
        <Route exact path='/nasa' element={<NasaPage />} />
    </Routes>
);

export default PageSwitch;