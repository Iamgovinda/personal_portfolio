import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './MenuBar.module.scss';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const navigate = new useNavigate();
  return (
    <>
        <div className={styles['menu-bar']}>
            <p className={styles['title']}>Blogs</p>
            <Button color='green' onClick={()=>navigate('/add-new-blog')}>Add New Blog</Button>
        </div>
    </>
  )
}

export default MenuBar