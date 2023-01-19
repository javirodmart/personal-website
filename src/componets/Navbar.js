import React, { useState } from "react";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const navInfo = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/blog',
            name: 'Blogs'
        },
        {
            path: '/contact',
            name: 'Contact'
        }, {
            path: '/portfolio',
            name: 'Portfolio'
        },
    ]


    return (
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
            <Container>
                <Navbar.Brand className="brand" href="/">
                    Javier Rodriguez
                    <h2>Software Engineer</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end ms-auto" activeKey="/home">
                        {navInfo.map((item) => (
                            <Nav.Item className="nav-link">
                                <NavLink className="nav-link" to={item.path} key={item.path}>
                                    {item.name}
                                </NavLink>
                            </Nav.Item>))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

