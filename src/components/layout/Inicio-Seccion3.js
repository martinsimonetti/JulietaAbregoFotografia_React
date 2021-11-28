import { Container, Row, Col } from "react-bootstrap";

import fotoQuienSoy from '../../images/fotos/QuienSoy.jpg';

const Seccion3 = (props) => {
    return (
        <section>
            <Container>
                <h1>¿Quién soy?</h1>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam laboriosam dicta
                            corporis delectus, dolores impedit, adipisci perspiciatis autem quis fuga, consequuntur
                            omnis molestiae saepe! Ipsa quod hic labore modi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam omnis explicabo soluta
                            similique doloribus aspernatur qui voluptas exercitationem quasi. Excepturi consectetur
                            aliquid cupiditate sit, reprehenderit totam vitae rerum. Obcaecati?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem? Minus ad alias
                            aliquid praesentium cum ratione voluptatum culpa perferendis deleniti saepe distinctio,
                            rerum aspernatur porro, quaerat dolorem, cupiditate exercitationem.</p>
                    </Col>
                    <Col lg={4}>
                        <img src={fotoQuienSoy} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Seccion3;