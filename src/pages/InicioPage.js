import '../styles/components/pages/InicioPage.css';

import Seccion1 from "../components/layout/Inicio-Seccion1";
import Seccion2 from "../components/layout/Inicio-Seccion2";
import Seccion3 from "../components/layout/Inicio-Seccion3";
import Seccion4 from "../components/layout/Inicio-Seccion4";
import { Container } from 'react-bootstrap';

const InicioPage = (props) => {
    return (
        <main className='bg-primary'>
            <Seccion1></Seccion1>
            <Seccion2></Seccion2>
            <Container>
                <hr />
            </Container>
            <Seccion3></Seccion3>
            <Container>
                <hr />
            </Container>
            <Seccion4></Seccion4>
            <br/>
        </main>
    );
}

export default InicioPage;