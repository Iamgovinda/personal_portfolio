import React from 'react';
import styles from './Client.module.scss';
import googleIcon from '../../assets/icons/google.png';

const Client = (props) => {
  return (
    <div className={styles['client-block']}>
      <a href="/">
        <img src={props?.data?.image?.file ?? googleIcon} alt="" className={styles['client-img']}/>
      </a>
    </div>
  )
}

export default Client