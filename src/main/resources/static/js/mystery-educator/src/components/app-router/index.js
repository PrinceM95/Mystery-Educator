import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home'
import React from 'react';
import ContactPage from '../../pages/contact';

const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
    </Routes>
);

export default PageSwitch;