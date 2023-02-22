import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Button.module.scss';
const MyButton = (props) => {
  return (
    <Button className={styles['btn']}>
        {props.txt}
    </Button>
  )
}

export default MyButton;