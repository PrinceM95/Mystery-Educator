import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home';
import BoredPage from '../../pages/bored';
import InstrumentsPage from '../../pages/instruments';
import NasaPage from '../../pages/nasa';
import ContactPage from '../../pages/contact';
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/bored'} component={BoredPage} />
        <Route exact path={'/instruments'} component={InstrumentsPage} />
        <Route exact path={'/nasa'} component={NasaPage} />
        <Route exact path={'/contact'} component={ContactPage} />
    </Routes>
);

export default PageSwitch;