import { Container, Row, Col, Card, Button } from "react-bootstrap";

import '../../styles/components/layout/Inicio-Seccion2.css';

const Seccion2 = (props) => {
    return (
        <section>
            <Container>
                <h1>Título</h1>
                <Row xs={1} md={2} className='g-4 mx-auto' style={{ maxWidth: '800px' }}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/720.png" />
                            <Card.Body className='mx-auto'>
                                <h3 className='text-center'>Card Title</h3>
                                <Card.Text className="text-justify">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium quidem
                                    assumenda aspernatur tempora, molestiae facere illum soluta eveniet alias excepturi
                                    tenetur voluptas!
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary">Ver</Button>
                                </div>
                                <br />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/1024x768.png" />
                            <Card.Body>
                                <h3 className='text-center'>Card Title</h3>
                                <Card.Text className="text-justify">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Earum explicabo sequi delectus ipsa suscipit nisi incidunt praesentium quidem
                                    assumenda aspernatur tempora, molestiae facere illum soluta eveniet alias excepturi
                                    tenetur voluptas!
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="primary">Ver</Button>
                                </div>
                                <br />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Seccion2;