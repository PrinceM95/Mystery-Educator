import { Route, Routes } from 'react-router-dom';

import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home'
import InstrumentsPage from '../../pages/instruments';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/instruments'} element={<InstrumentsPage />} />
    </Routes>
);

export default PageSwitch;