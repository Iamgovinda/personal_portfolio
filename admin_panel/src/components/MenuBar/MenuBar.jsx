import React, {useState} from 'react';
import styles from './MenuBar.module.scss';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';
import { Button } from '@mui/material';

const MenuBar = (props) => {
  const navigate = new useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
        <div className={styles['menu-bar']}>
            <p className={styles['title']}>Blogs</p>
            <Button style={{backgroundColor:'green', color:'white'}} onClick={()=>setOpen(true)}>Add New Blog</Button>
        </div>
        <BasicModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default MenuBar