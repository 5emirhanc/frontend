import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./Card.css"
function Cards() {
  return (
<CardGroup className="crdgrp">
  <Card>
    <Card.Img className="rsm" variant="top" src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="btn" variant="outline-success"> </Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="rsm" variant="top" src="https://img.vivense.com/aE35D0odgT6yysoHH52O0qwJiaA=/images/f87aad3bc01148469c47b8d7b5fcafed.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="btn" variant="outline-success">Satın Almak İçin Tıkla </Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="rsm" variant="top" src="https://img.vivense.com/ayNOoGtxHuHMe0VJeou7ED9xPmo=/images/eb9c2324fa854f29aab48869a606677c.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className="btn" variant="outline-success">Satın Almak İçin Tıkla </Button>
    </Card.Footer>
  </Card>
</CardGroup>
  );
}

export default Cards;
