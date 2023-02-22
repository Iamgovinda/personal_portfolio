import { Route, Routes } from "react-router-dom";
import React from 'react'
import MasterLayer from "../layouts/MasterLayout";
import Home from "../layouts/Home/Home";

const Routers = () => {
  return (
    <MasterLayer>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="resume/" element={<Resume />} /> */}
        </Routes>
    </MasterLayer>
  )
}

export default Routers