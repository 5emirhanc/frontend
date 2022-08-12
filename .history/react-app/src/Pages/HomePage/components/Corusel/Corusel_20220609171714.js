import Carousel from "react-bootstrap/Carousel";
import "./Corusel.css";
function Carousell() {
  return(
<Carousel>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://img.vivense.com/ayNOoGtxHuHMe0VJeou7ED9xPmo=/images/eb9c2324fa854f29aab48869a606677c.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://img.vivense.com/aE35D0odgT6yysoHH52O0qwJiaA=/images/f87aad3bc01148469c47b8d7b5fcafed.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://img.vivense.com/2YTYOVRi9tgvVr-Sdv-zmgUjsHE=/images/325d5a1e1587465a8d04187d13a1acbb.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}
export default Carousell;