import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineInventory } from "react-icons/md";

export default class NavBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
                <Container fluid>

                    <Navbar.Brand href="home">Product's-Inventory</Navbar.Brand>
                    <Navbar.Brand> <MdOutlineInventory /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="bg-body-secondary">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="bg-body-secondary">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="bg-body-secondary">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" >
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="signin">Sign In</Nav.Link>
                            <Nav.Link eventKey={2} href="signup">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}