import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <>
            <Container fluid className=''>
                <Navbar expand="lg" variant='' className="px-4 bg-dark">
                        <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto text-white">
                                <Link to="/register"><Nav.Link href="#home" className='text-secondary'>Register</Nav.Link></Link>
                                <Link to="/view"><Nav.Link href="#link" className='text-secondary'>View</Nav.Link></Link>
                                
                            </Nav>
                            <Button className='bg-transparent text-secondary border-0'>Sign In</Button>
                        </Navbar.Collapse>
                </Navbar>

            </Container>
        </>
    )
}

export default MyNavbar;
