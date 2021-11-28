import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../../styles/components/layout/NavBar.css';

import logo from '../../images/logoPrincipal.png';

import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <Navbar variant="dark" expand="lg" className="bg-secondary">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="Julieta Abrego Fotografía" width="250px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="mr-auto my-lg-0">
                        <NavLink exact to="/" className='nav-link' activeClassName="active">Inicio</NavLink>
                        <NavLink exact to="/servicios" className='nav-link' activeClassName="active">Servicios</NavLink>
                        <NavLink exact to="/galeria" className='nav-link' activeClassName="active">Galeria</NavLink>
                        <NavLink exact to="/contacto" className='nav-link' activeClassName="active">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;