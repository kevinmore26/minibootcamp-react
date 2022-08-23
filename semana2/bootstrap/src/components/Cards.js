import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
function BasicExample() {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between",marginTop:"20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.linio.com/p/dcbfcd4ec9553a6cd69c2b48c8ae7cf6-product.webp"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.linio.com/p/dcbfcd4ec9553a6cd69c2b48c8ae7cf6-product.webp"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.linio.com/p/dcbfcd4ec9553a6cd69c2b48c8ae7cf6-product.webp"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button  style={{backgroundColor:"#6528E0",color:"white",padding:"10px 20px"}}>
                Read the docs</Button>
          </Card.Body>
        </Card> 
      </div>
    </Container>
  );
}

export default BasicExample;
