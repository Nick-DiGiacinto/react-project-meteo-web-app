import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Ho riflettuto abbastanza sul nome e quando ho pensato a questa 
//piccola associazione con l'astrologo rinascimentale Nostradamus 
//l'ho subito implementata
import Nav from "react-bootstrap/Nav";
const Navbar01 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Link to={"/"} className="nav-link">
          <Navbar.Brand>Nostra-Waether: prevision more reliable than Nostradamus himself!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Infos</Nav.Link>
            <Nav.Link>News</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Your account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbar01;