import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import { Button } from "react-bootstrap";
import MyButton from "../Button/Button";
const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar style={{backgroundColor:'#FFFFFF'}} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex gap-3 align-items-center">
            <div className={styles["logo"]}>B</div>
            <p className={styles['brooklyn']}>Brooklyn</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={styles['common-text']} onClick={()=>navigate('/')}>Home</Nav.Link>
              <Link className={styles['common-text']} to="about">About</Link>
              <Link className={styles['common-text']} to="resume">Resume</Link> 
              <Link className={styles['common-text']} to="testimonial">Testimonial</Link>{" "}
              <Link className={styles['common-text']} to="blog">Blog</Link> 
              <Link className={styles['common-text']} to="clients">Clients</Link>
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
