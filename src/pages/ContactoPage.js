import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../styles/components/pages/ContactoPage.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        redes: '',
        mensaje: ''
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main className='bg-primary'>
            <br />
            <section>
                <Container>
                    <Card>
                        <Row>
                            <div>
                                <Card.Body>
                                    <Row xs={1} md={3} className='align-items-center'>
                                        <a href="mailto:info@julietaabrego.com.ar" className="text-decoration-none" target="_blank">
                                            <h4 className="text-center">
                                                <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                                                info@julietaabrego.com.ar
                                            </h4>
                                        </a>
                                        <a href="https://wa.me/message/LA5VAWG3CCUDF1" className="text-decoration-none" target="_blank">
                                            <h4 className="text-center">
                                                <FontAwesomeIcon icon={faWhatsapp} className='me-3' />
                                                11 3042-2765
                                            </h4>
                                        </a>
                                        <a href="https://www.instagram.com/julietaabregoph/"
                                            className="text-secondary text-decoration-none" target="_blank">
                                            <h4 className="text-center">
                                                <FontAwesomeIcon icon={faInstagram} className='me-3' />
                                                @julietaabregoph
                                            </h4>
                                        </a>
                                    </Row>
                                    <Row cols={1}>
                                        <p className="card-text">¿En qué puedo ayudarte? Si tenés alguna duda, alguna consulta, si querés pedir un presupuesto o cualquier otra cuestión, ¡enviame un mensaje y charlemos!</p>
                                    </Row>
                                    <br />
                                    <form action="/contacto" method="post" onSubmit={handleSubmit}>
                                        <Row className='g-3' xs={1} lg={2}>
                                            <Col>
                                                <label for="inputNombre" className="form-label">Nombre completo</label>
                                                <input type="text" className="form-control" id="nombre"
                                                    placeholder="Ingresá tu nombre..." name="nombre" value={formData.nombre} onChange={handleChange} required />
                                            </Col>
                                            <Col>
                                                <label for="inputRedes" className="form-label">Redes (Opcional)</label>
                                                <input type="text" className="form-control" id="redes"
                                                    placeholder="Ingresá tus redes..." name="redes" value={formData.redes} onChange={handleChange} />
                                            </Col>
                                            <Col>
                                                <label for="inputEmail" className="form-label">Correo electrónico</label>
                                                <input type="email" className="form-control" id="email" placeholder="Ingresá tu e-mail..." name="email" value={formData.email} onChange={handleChange} required />
                                            </Col>
                                            <Col>
                                                <label for="inputMensaje" className="form-label">Mensaje</label>
                                                <textarea className="form-control" id="mensaje" rows="5"
                                                    placeholder="Dejá tu mensaje..." name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
                                            </Col>
                                        </Row>
                                        <Col cols={12} className='col-align-center mt-4'>
                                            <div className='text-center'>
                                                <input type="submit" class='btn btn-primary' value="Enviar"/>
                                            </div>
                                        </Col>
                                        <br />
                                        <Row className="text-center">
                                            {sending ? <p>Enviando...</p> : null}
                                            {msg ? <p>{msg}</p> : null}
                                        </Row>
                                    </form>
                                </Card.Body>
                            </div>
                        </Row>
                    </Card>
                </Container>
            </section>
            <br />
        </main>
    );
}

export default ContactoPage;