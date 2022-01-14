import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"

const NavBar = ({data}) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Menú de Compras</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
						<Nav className='me-auto'>
							{data.map((item) => {
                                return <Nav.Link href={item.enlace}>{ item.nombre}</Nav.Link>
							})}
						</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar