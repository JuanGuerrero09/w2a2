import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import WorldIcon from './icons/WorldIcon';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NavBar() {
  const {logout} = useContext(AppContext)
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to='/home'><WorldIcon size={30} /> While we are away</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/notes'>Notes</Nav.Link>
            <Nav.Link as={NavLink} to='/draws'>Draws</Nav.Link>
            <Nav.Link as={NavLink} to='/' onClick={logout}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}