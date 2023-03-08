import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

const Footer = (props) => {
  return (
    <>
      <div className={styles["footer-main"]}>
        <Container>
          <Row className={styles['row-main']}>
            <Col lg={4} sm={12} md={6} className={styles['first-content']}>
              <div className={styles["icon"]}>
                {props?.user?.name?.split(" ").map((word => word[0])).join("")}
              </div><span className={styles['user-name']}>{props?.user?.name}</span>
            </Col>
            <Col lg={4} sm={12} md={6} className={styles['middle-content']}>
              <HashLink className={styles['pointer']} style={{ cursor: 'pointer' }} smooth to='/#about'>About</HashLink>
              <HashLink className={styles['pointer']} style={{ cursor: 'pointer' }} smooth to='/#resume'>Resume</HashLink>
              <HashLink className={styles['pointer']} style={{ cursor: 'pointer' }} smooth to='/#testimonial'>Testimonial</HashLink>
              <HashLink className={styles['pointer']} style={{ cursor: 'pointer' }} smooth to='/#blog'>Blog</HashLink>
            </Col>
            <Col lg={4} sm={12} md={12} className={styles['pointer']} style={{fontSize:'0.8rem'}}>
              Copyright &#169; {props?.user?.name} all right reserved!
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer