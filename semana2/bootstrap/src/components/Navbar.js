import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import imagen from "../assets/amazon.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#131921" }}>
      <Container fluid>

        <img src={imagen} style={{ height: "50px" }}></img>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Brand href="#" style={{ color: "white" }}>
          Mis pedidos
        </Navbar.Brand>
 
      
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
