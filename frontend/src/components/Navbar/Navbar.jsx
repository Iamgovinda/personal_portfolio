import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';  
// import { Button } from "react-bootstrap";
import MyButton from "../Button/Button";
import { Link } from "react-router-dom";
const NavigationBar = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar style={{backgroundColor:'#FFFFFF'}} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex gap-3 align-items-center">
            <div className={styles["logo"]}>{props?.user?.name?.split(" ").map((word => word[0])).join("") ?? 'JD'}</div>
            <p className={styles['brooklyn']}>{props?.user?.name ?? 'John Doe'}</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={styles['common-text']} onClick={()=>navigate('/')}>Home</Nav.Link>
              <HashLink className={styles['common-text']} smooth to="/#about">About</HashLink>
              <HashLink className={styles['common-text']} smooth to="/#resume">Resume</HashLink> 
              <HashLink className={styles['common-text']} smooth to="/#testimonial">Testimonial</HashLink>{" "}
              <Link className={styles['common-text']} to={'/all-blogs'}>Blog</Link>{" "}
            </Nav>
            <HashLink smooth to="/#contact" className={styles['common-text']}>
            <MyButton txt="Contact" /></HashLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
