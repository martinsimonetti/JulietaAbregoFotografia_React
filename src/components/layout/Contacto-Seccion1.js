import { Container, Row, Col, Card } from "react-bootstrap";
import '../../styles/components/layout/Contacto-Seccion1.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Seccion1 = (props) => {
    return (
        <section>
            <Container>
                <Card>
                    <Row>
                        <div>
                            <Card.Body>
                                <Row xs={1} md={3} className='align-items-center'>
                                    <a href="mailto:info@julietaabrego.com.ar" className="text-decoration-none" target="_blank">
                                        <h4 className="text-center">
                                        <FontAwesomeIcon icon={faEnvelope} className='me-3'/>
                                            info@julietaabrego.com.ar
                                        </h4>
                                    </a>
                                    <a href="https://wa.me/message/LA5VAWG3CCUDF1" className="text-decoration-none" target="_blank">
                                        <h4 className="text-center">
                                            <FontAwesomeIcon icon={faWhatsapp} className='me-3'/>
                                            11 3042-2765
                                        </h4>
                                    </a>
                                    <a href="https://www.instagram.com/julietaabregoph/"
                                        className="text-secondary text-decoration-none" target="_blank">
                                        <h4 className="text-center">
                                            <FontAwesomeIcon icon={faInstagram} className='me-3'/>
                                            @julietaabregoph
                                        </h4>
                                    </a>
                                </Row>
                                <Row cols={1}>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Laborum
                                        provident laudantium ea dolores qui facere temporibus ipsa culpa pariatur.
                                        Expedita
                                        vero veritatis mollitia temporibus consequatur nobis itaque architecto incidunt
                                        porro.</p>
                                </Row>
                                <br />
                                <form>
                                    <Row className='g-3' lg={2}>
                                        <Col cols={12}>
                                            <label for="inputNombre" className="form-label">Nombre completo</label>
                                            <input type="text" className="form-control" id="inputNombre"
                                                placeholder="Ingresá tu nombre..." required />
                                        </Col>
                                        <Col cols={12}>
                                            <label for="inputRedes" className="form-label">Redes (Opcional)</label>
                                            <input type="text" className="form-control" id="inputRedes"
                                                placeholder="Ingresá tus redes..." />
                                        </Col>
                                        <Col cols={12}>
                                            <label for="inputEmail" className="form-label">Correo electrónico</label>
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Ingresá tu e-mail..." required />
                                        </Col>
                                        <Col cols={12}>
                                            <label for="inputMensaje" className="form-label">Mensaje</label>
                                            <textarea className="form-control" id="inputMensaje" rows="5"
                                                placeholder="Dejá tu mensaje..." required></textarea>
                                        </Col>
                                    </Row>
                                    <Col cols={12} className='col-align-center mt-4'>
                                        <div className='text-center'>
                                            <a href='#' class='btn btn-primary'>Enviar</a>
                                        </div>
                                    </Col>
                                </form>
                            </Card.Body>
                        </div>
                    </Row>
                </Card>
            </Container>
        </section>
    );
}

export default Seccion1;