import React from 'react';
import MasterLayer from '../layouts/MasterLayer';
import { Route, Routes } from 'react-router-dom';
import Home from '../layouts/Home/Home';
import AddBlog from '../components/Blog/AddBlog';
const Routers = () => {
  return (
    <MasterLayer>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='add-new-blog/' element={<AddBlog/>} />

        </Routes>
    </MasterLayer>
  )
}

export default Routers