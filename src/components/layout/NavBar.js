import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../../styles/components/layout/NavBar.css';

import logo from '../../images/logoPrincipal.png';


const NavBar = (props) => {
    return (
        <Navbar variant="dark" expand="lg" className="bg-secondary">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="Julieta Abrego Fotografía" width="250px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav className="mr-auto my-lg-0">
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Servicios</Nav.Link>
                        <Nav.Link href="#action2">Cursos</Nav.Link>
                        <Nav.Link href="#action2">Recursos gratuitos</Nav.Link>
                        <Nav.Link href="#action2">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;