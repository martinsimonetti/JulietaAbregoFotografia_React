import { Container, Row, Col, Card } from "react-bootstrap";
import '../../styles/components/layout/Servicios-Seccion1.css';

const Seccion1 = (props) => {
    return (
        <section>
            <Container>
                <Row xs={1} md={2} lg={4} className='g-4 mx-auto'>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: 'url("https://via.placeholder.com/720x1280.png)"' }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Fotos de producto, REDES</h3>
                                    <Card.Text className='text-justify'>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing
                                        elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium
                                        quidem
                                        assumenda aspernatur tempora
                                    </Card.Text>
                                </Card.Body>
                                <Col className='text-center'>
                                    <a href="#" class="btn btn-primary">Ver</a>
                                </Col>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: 'url("https://via.placeholder.com/720x1280.png)"' }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Fotos de producto, TIENDA</h3>
                                    <Card.Text className='text-justify'>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing
                                        elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium
                                        quidem
                                        assumenda aspernatur tempora
                                    </Card.Text>
                                </Card.Body>
                                <Col className='text-center'>
                                    <a href="#" class="btn btn-primary">Ver</a>
                                </Col>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: 'url("https://via.placeholder.com/720x1280.png)"' }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Foodstyling</h3>
                                    <Card.Text className='text-justify'>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing
                                        elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium
                                        quidem
                                        assumenda aspernatur tempora
                                    </Card.Text>
                                </Card.Body>
                                <Col className='text-center'>
                                    <a href="#" class="btn btn-primary">Ver</a>
                                </Col>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: 'url("https://via.placeholder.com/720x1280.png)"' }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Lookbook</h3>
                                    <Card.Text className='text-justify'>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing
                                        elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium
                                        quidem
                                        assumenda aspernatur tempora
                                    </Card.Text>
                                </Card.Body>
                                <Col className='text-center'>
                                    <a href="#" class="btn btn-primary">Ver</a>
                                </Col>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </section>
    );
}

export default Seccion1;