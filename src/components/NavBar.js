import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({name})=>{
  return (
    <>
      <Navbar className="navBar"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="name" to="/">Javier Rodriguez</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/business">Business</Link>
            <Link className="link" to="/personal"> Personal</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar