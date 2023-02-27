import React, {useState} from 'react';
// import styles from './Home.module.scss';
import MenuBar from '../../components/MenuBar/MenuBar';
import BlogList from '../../components/Blog/BlogList';
const Home = () => {
  return (
    <>
      <MenuBar />
      <BlogList />
    </>
  )
}

export default Home