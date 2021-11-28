import { useState, useEffect } from "react";
import axios from "axios";
import GaleriaItem from "../components/layout/galeria/galeriaItem";

const GaleriaPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [galeria, setGaleria] = useState([]);

    useEffect(() => {
        const cargarGaleria = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/galeria');
            setGaleria(response.data);
            setLoading(false);
        };
        cargarGaleria();
    }, []);

    return (
        <main className='bg-primary'>
            <div class="container">
                <br />
                <div class="row md-5">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        galeria.map(item => <GaleriaItem key={item.id} title={item.titulo} description={item.descripcion} photo={item.imagen} />)
                    )}
                </div>
            </div>
        </main>
    );
}

export default GaleriaPage;