import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { paths } from "./shared/paths";

export function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="mb-3">
      <Container fluid>
        <LinkContainer to={paths.root}>
          <Navbar.Brand>Hannah Accounting</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <LinkContainer to={paths.profile}>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to={paths.about}>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
