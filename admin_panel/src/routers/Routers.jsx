import React from 'react';
import MasterLayer from '../layouts/MasterLayer';
import { Route, Routes } from 'react-router-dom';
import Home from '../layouts/Home/Home';
const Routers = () => {
  return (
    <MasterLayer>
        <Routes>
            <Route path='' element={<Home />} />
        </Routes>
    </MasterLayer>
  )
}

export default Routers