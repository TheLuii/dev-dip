import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navibar extends Component {
    render() {
        return (
               
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">OnlyGadget</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/iphone">Iphone</Nav.Link>
                                <Nav.Link href="/ipads">IPad</Nav.Link>
                                <Nav.Link href="/macbooks">MacBook</Nav.Link>
                                <Nav.Link href="/imac">IMac</Nav.Link>
                                <Nav.Link href="/acc">Аксессуары</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/cart">Корзина</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            

        );
    }
}

export default Navibar;