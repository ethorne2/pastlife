import React from 'react';
/* imports for Bootstrap Navbar */
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Past Life</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;