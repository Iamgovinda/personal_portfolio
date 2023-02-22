import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'

const NavigationBar = () => {
  return (
    <>
      <Navbar bg='light' style={{borderBottom:'1px solid gray'}}>
        <Container fluid>
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >
              Signed in as: <a href="#login" style={{textDecoration:'none'}}>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar;
