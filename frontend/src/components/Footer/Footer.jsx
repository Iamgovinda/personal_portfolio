import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <div className={styles["footer-main"]}>
        <Container>
          <Row className={styles['row-main']}>
            <Col lg={4} className={styles['first-content']}>
              <div className={styles["icon"]}>
                B
              </div><span className={styles['user-name']}>Brooklyn</span>
            </Col>
            <Col lg={4} className={styles['middle-content']}>
              <Link style={{cursor:'pointer'}} to='home'>Home</Link>
              <Link style={{cursor:'pointer'}} to='about'>About</Link>
              <Link style={{cursor:'pointer'}} to='resume'>Resume</Link>
              <Link style={{cursor:'pointer'}} to='testimonial'>Testimonial</Link>
              <Link style={{cursor:'pointer'}} to='blog'>Blog</Link>
              <Link style={{cursor:'pointer'}} to='clients'>Clients</Link>
            </Col>
            <Col lg={4} className={styles['last-content']}>
              Copyright &#169; Brooklyn all right reserved!
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer