import { Route, Routes } from "react-router-dom";
import React from 'react'
import MasterLayer from "../layouts/MasterLayout";
import Home from "../layouts/Home/Home";
import BlogView from "../layouts/Blog/BlogView";

const Routers = () => {
  return (
    <MasterLayer>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="resume/" element={<Resume />} /> */}
            <Route path="view-blog/:uuid" element={<BlogView />} />
        </Routes>
    </MasterLayer>
  )
}

export default Routers