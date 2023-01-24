import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/home'
import React from 'react';

const PageSwitch = () => (
    <Routes>
        <Route exact path={'/'} component={HomePage} />
    </Routes>
);

export default PageSwitch;