import { Route, Routes } from "react-router-dom";
import React from 'react'
import MasterLayer from "../layouts/MasterLayout";
import Home from "../layouts/Home/Home";
import BlogView from "../layouts/Blog/BlogView";
import BlogPage from "../layouts/Blog/BlogPage";

const Routers = () => {
  return (
    <MasterLayer>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="resume/" element={<Resume />} /> */}
            <Route path="view-blog/:uuid" element={<BlogView />} />
            <Route path="all-blogs/" element={<BlogPage />} />
        </Routes>
    </MasterLayer>
  )
}

export default Routers