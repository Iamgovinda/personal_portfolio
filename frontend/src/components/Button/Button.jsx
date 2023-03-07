import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Button.module.scss';
const MyButton = (props) => {

  return (
    <Button className={styles['btn']}>
        {
          (props.email)?(
            <>
              <a href={`mailto:${props?.email}`} style={{textDecoration:'none', color:'white'}}>{props?.txt}</a>
            </>
          ):(
            <>{props?.txt}</>
          )
        }
    </Button>
  )
}

export default MyButton;