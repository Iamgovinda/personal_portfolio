import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { HashLink } from 'react-router-hash-link';  
// import { Button } from "react-bootstrap";
import MyButton from "../Button/Button";
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar style={{backgroundColor:'#FFFFFF'}} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex gap-3 align-items-center">
            <div className={styles["logo"]}>UD</div>
            <p className={styles['brooklyn']}>Uddav Dahal</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={styles['common-text']} onClick={()=>navigate('/')}>Home</Nav.Link>
              <HashLink className={styles['common-text']} smooth to="/#about">About</HashLink>
              <HashLink className={styles['common-text']} smooth to="/#resume">Resume</HashLink> 
              <HashLink className={styles['common-text']} smooth to="/#testimonial">Testimonial</HashLink>{" "}
              <HashLink className={styles['common-text']} smooth to="/#blog">Blog</HashLink> 
              <HashLink className={styles['common-text']} smooth to="/#clients">Clients</HashLink>
            </Nav>
            <Link to="contact">
            <MyButton txt="Contact" /></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
