import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home';
import ContactPage from '../../pages/contact';
import React from 'react';


const PageSwitch = () => (
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path={'/contact'} element={<ContactPage />} />
    </Routes>
);

export default PageSwitch;