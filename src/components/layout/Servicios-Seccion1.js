import { Container, Row, Col, Card } from "react-bootstrap";
import '../../styles/components/layout/Servicios-Seccion1.css';

import fotoRedes from '../../images/fotos/Servicios_Redes.jpg';
import fotoTienda from '../../images/fotos/Servicios_Tienda.jpg';
import fotoFoodstyling from '../../images/fotos/Servicios_Food.jpg';
import fotoLookbook from '../../images/fotos/Servicios_Lookbook.jpg';

const Seccion1 = (props) => {
    return (
        <section>
            <Container>
                <Row xs={1} md={2} lg={4} className='g-4 mx-auto'>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: `url(${fotoRedes})` }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Fotos de producto, REDES</h3>
                                    <Card.Text className='text-justify'>
                                        Fotografías ambientadas, con props y elementos que comuniquen los valores de tu marca. Se entregarán a tamaño historias y feed. Incluye reels.
                                    </Card.Text>
                                </Card.Body>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: `url(${fotoTienda})` }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Fotos de producto, TIENDA ONLINE</h3>
                                    <Card.Text className='text-justify'>
                                        Fotografías de fondo liso, sin props ni elementos que distraigan de nuestro protagonista, el producto.
                                    </Card.Text>
                                </Card.Body>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: `url(${fotoFoodstyling})` }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Foodstyling</h3>
                                    <Card.Text className='text-justify'>
                                        Fotografías de comidas y alimentos ambientadas con props y elementos.
                                        Conoceremos el sabor de tus comidas a través de las imágenes.
                                    </Card.Text>
                                </Card.Body>
                                <br />
                            </Row>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className="h-100 background-servicios mx-auto"
                            style={{ backgroundImage: `url(${fotoLookbook})` }}>
                            <Row xs={1} className="d-flex flex-column h-100 gx-1">
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <h3 class="text-center">Lookbook</h3>
                                    <Card.Text className='text-justify'>
                                        Orientado a la moda. Son fotografías con modelo, con o sin cara, donde el protagonista es el producto.
                                    </Card.Text>
                                </Card.Body>
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