import Carousel from 'react-bootstrap/Carousel';

const Seccion1 = (props) => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1400x550.png" class="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Servicios</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a href="#" class="btn btn-primary">Ver</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1400x550.png" class="d-block w-100"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Cursos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="btn btn-primary">Ver</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1400x550.png" class="d-block w-100"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Recursos gratuitos</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <a href="#" class="btn btn-primary">Ver</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Seccion1;