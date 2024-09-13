import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../logo.PNG";
import { Link } from 'react-router-dom';
import "./Navigation.css";


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home"><img  src={logo} alt="logo" style={{ width: 70,  height: 70 }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
         <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="page text-decoration-none text-white">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="page text-decoration-none text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              className="page text-decoration-none text-white"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              className="page text-decoration-none text-white"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="page text-decoration-none text-white"
            >
              Contacts
            </Nav.Link>
          </Nav>
         </Navbar.Collapse>
         
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;