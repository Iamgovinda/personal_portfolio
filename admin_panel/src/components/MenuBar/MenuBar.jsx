import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import styles from './MenuBar.module.scss';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal/Modal';

const MenuBar = (props) => {
  const navigate = new useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
        <div className={styles['menu-bar']}>
            <p className={styles['title']}>Blogs</p>
            <Button color='green' onClick={()=>setOpen(true)}>Add New Blog</Button>
        </div>
        <BasicModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default MenuBar