import { Container, Row, Col, Card } from "react-bootstrap";
import '../../styles/components/layout/Inicio-Seccion4.css';

const Seccion4 = (props) => {
    return (
        <section>
            <Container>
                <h1>Suscribite</h1>
                <Card>
                    <Row className='g-0'>
                        <Col lg={4}>
                            <img src="https://via.placeholder.com/720x720.png" class="img-fluid img-suscribite"
                                alt="..." />
                        </Col>
                        <Col lg={8}>
                            <Card.Body>
                                <h3>Formulario de suscripción</h3>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum
                                    provident laudantium ea dolores qui facere temporibus ipsa culpa pariatur.Expedita
                                    vero veritatis mollitia temporibus consequatur nobis itaque architecto incidunt
                                    porro.
                                </Card.Text>
                                <form className="g-3">
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <label for="inputNombre" class="form-label">Nombre completo</label>
                                            <input type="text" class="form-control" id="inputNombre"
                                                placeholder="Ingresá tu nombre..." required />
                                        </Col>
                                        <Col xs={12} className='mb-3'>
                                            <label for="inputEmail" class="form-label">Correo electrónico</label>
                                            <input type="email" class="form-control" id="inputEmail" required />
                                        </Col>
                                        <Col xs={12} className='col-align-center'>
                                            <a href="#" class="btn btn-primary btn-centrado">Suscribirse</a>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    )
}

export default Seccion4;