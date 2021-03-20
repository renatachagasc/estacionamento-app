import React from 'react';
import './index.css';
import logo from "../../assets/img/logo.png";
import { Nav, Navbar } from 'react-bootstrap';

function Navegador() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="logo" className="logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Entrada</Nav.Link>
                        <Nav.Link href="#pricing">Saída</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       </div>
    );
};

export default Navegador;