import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <footer className='bg-secondary text-secondary text-center text-lg-start'>
            <Container className='p-4'>
                <Row>
                    <Col lg={6} md={12} className='mb-6 md-0'>
                        <h5 className='text-secondary align-self-start'>Quiero info sobre...</h5>
                        <ul className='list-unstyled'>
                            {/* <li><Link href='/' className='text-secondary text-decoration-none'>Servicios</Link></li>
                            <li><Link href='/' className='text-secondary text-decoration-none'>Cursos</Link></li>
                            <li><Link href='/' className='text-secondary text-decoration-none'>Recursos gratuitos</Link></li> */}
                        </ul>
                    </Col>
                    <Col lg={3} className='mb-6 md-0'>

                    </Col>
                    <Col lg={3} md={12} className='mb-6 md-0'>
                        <h5 className='text-secondary align-self-start'>Buscame en las redes</h5>
                        <ul className='list-unstyled'>
                            <li><a href="https://wa.me/message/LA5VAWG3CCUDF1" class="text-secondary text-decoration-none"><FontAwesomeIcon icon={faWhatsapp} /> 11 3042-2765</a></li>
                            <li><a href="https://www.instagram.com/julietaabregoph/" class="text-secondary text-decoration-none" target="_blank"><FontAwesomeIcon icon={faInstagram} /> @julietaabregoph</a></li>
                            <li><a href="https://www.tiktok.com/@julietaabregoph" class="text-secondary text-decoration-none" target="_blank"><FontAwesomeIcon icon={faTiktok} /> @julietaabregoph</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Copyright
                <p className="mb-0"><a className="text-secondary text-decoration-none" href="#">Martín Simonetti</a></p>
            </div>
        </footer>
    )
}

export default Footer;