import React from 'react';
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
    // Displays the Navigation bar from bootstrap with links to home, about pages
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