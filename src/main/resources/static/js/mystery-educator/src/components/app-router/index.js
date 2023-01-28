import { Route, Routes } from 'react-router-dom';

import ContactPage from '../../pages/contact';
import HomePage from '../../pages/home'
import InstrumentPage from '../../pages/instrument';
import InstrumentsPage from '../../pages/instruments';
import NasaPage from '../../pages/nasa-missions';
import BoredPage from '../../pages/bored';
import React from 'react';
import TableOfContentsPage from '../../pages/table-of-contents';

const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/table-of-contents'} element={<TableOfContentsPage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
        <Route exact path={'/instruments'} element={<InstrumentsPage />} />
        <Route exact path={'/instruments/:id'} element={<InstrumentPage />} />
        <Route exact path={'/nasa'} element={<NasaPage />} />
        <Route exact path={'/bored'} element={<BoredPage />} />
    </Routes>
);

export default PageSwitch;