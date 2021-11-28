import { useState } from "react";
import axios from "axios";

import { Container, Row, Col, Card } from "react-bootstrap";
import '../../styles/components/layout/Inicio-Seccion4.css';
import fotoSuscripcion from '../../images/fotos/Suscripción.jpg';

const Seccion4 = (props) => {
    const initialForm = {
        nombre: '',
        email: ''
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
        const response = await axios.post('http://localhost:3000/api', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }


    return (
        <section>
            <Container>
                <h1>Suscribite</h1>
                <Card>
                    <Row className='g-0'>
                        <Col lg={4}>
                            <img src={fotoSuscripcion} class="img-fluid img-suscribite"
                                alt="..." />
                        </Col>
                        <Col lg={8}>
                            <Card.Body>
                                <h3>Formulario de suscripción</h3>
                                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum
                                    provident laudantium ea dolores qui facere temporibus ipsa culpa pariatur.Expedita
                                    vero veritatis mollitia.
                                </Card.Text>
                                <form className="g-3" action="/" method="post" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={12} className='mb-3'>
                                            <label for="inputNombre" class="form-label">Nombre completo</label>
                                            <input type="text" class="form-control" id="nombre" name="nombre"
                                                placeholder="Ingresá tu nombre..." value={formData.nombre} onChange={handleChange} required />
                                        </Col>
                                        <Col xs={12} className='mb-3'>
                                            <label for="inputEmail" class="form-label">Correo electrónico</label>
                                            <input type="email" placeholder="Ingresá tu e-mail..." class="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </Col>
                                        <Col xs={12} className='col-align-center'>
                                            <input type="submit" class="btn btn-primary btn-centrado" value="Suscribirse" />
                                        </Col>
                                    </Row>
                                    <br />
                                </form>
                                {sending ? <p>Enviando...</p> : null}
                                {msg ? <p>{msg}</p> : null}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    )
}

export default Seccion4;