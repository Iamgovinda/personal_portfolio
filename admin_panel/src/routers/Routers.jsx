import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../layouts/Home/Home';
import AddBlog from '../components/Blog/AddBlog';
import Login from '../components/Login/Login';
import { useUserContext } from '../context/UserContext';
import { get } from '../API/axios';
import { toast } from 'react-toastify';
import PrivateRoutes from './PrivateRoutes';
import EditBlog from '../components/Blog/EditBlog';
const Routers = () => {
  const { user, setUserData } = useUserContext();
  const isAuthed = localStorage.getItem("token");

  useEffect(() => {
    if (!user && isAuthed) {
      get(`/user/account/${"me"}/`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((err) => {
          toast.error("Couldn't fetch user.");
        });
    }
    //eslint-disable-next-line
  }, [user, isAuthed]);
  return (
    <>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='add-new-blog/:uuid' element={<AddBlog />} />
            <Route path='edit-blog/:uuid' element={<EditBlog />} />
          </Route>
        </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Routers