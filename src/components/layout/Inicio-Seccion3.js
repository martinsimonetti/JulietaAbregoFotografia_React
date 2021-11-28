import { Container, Row, Col } from "react-bootstrap";

import fotoQuienSoy from '../../images/fotos/QuienSoy.jpg';

const Seccion3 = (props) => {
    return (
        <section>
            <Container>
                <h1>¿Quién soy?</h1>
                <Row className="align-items-center">
                    <Col lg={8} className="text-justify">
                        <p>¡Hola! ❤️</p>
                        <p>🙋🏻‍♀️ Soy Julieta, tengo 24 años, y vivo en Lanús, Buenos Aires.</p>
                        <p>🎓Me formé como fotógrafa profesional en la Escuela Motivarte. A su vez, hice diversos cursos y capacitaciones en diseño gráfico, motion graphics, animación, audiovisuales, comunicación y community manager.</p>
                        <p>📸 Durante más de 6 años trabajé en todas las ramas de la fotografía que te puedas imaginar, pero en 2021 decidí emprender un nuevo camino.</p>
                        <p>✨ ¡Mi objetivo hoy es ayudar a emprendedores a que vendan a través de sus fotos y redes sociales!</p>
                    </Col>
                    <Col lg={4} className="text-end">
                        <img src={fotoQuienSoy} className="img-fluid" alt="" width='90%'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Seccion3;