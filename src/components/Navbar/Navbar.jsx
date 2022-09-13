import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Elham's Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/aboutme"
              >
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/projects"
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/skills"
              >
                Skills
              </Link>
            </Nav.Link>
          </Nav>
          <NavDropdown
            style={{ color: "white" }}
            title="Setting"
            className="justify-content-end"
            id="basic-navbar-dropdown"
          >
            <NavDropdown.Item>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Me
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link style={{ textDecoration: "none" }} to="/blogs">
                Blogs
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
