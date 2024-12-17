import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <>
            <Container fluid>
                <Navbar expand="lg" data-bs-theme="dark" bg="dark" className="px-4">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/register" className='text-decoration-none'><Nav.Link href="#home">Register</Nav.Link></Link>
                                <Link to="/view" className='text-decoration-none'><Nav.Link href="#link">View</Nav.Link></Link>
                            </Nav>
                            <Link to="/signin"><Button className='bg-transparent border-0 ps-0'>Sign In</Button></Link>
                        </Navbar.Collapse>
                </Navbar>

            </Container>
        </>
    )
}

export default MyNavbar;
