import React from 'react';

import '../../../styles/components/layout/galeria/galeria.css';

const GaleriaItem = (props) => {
    const { title, description, photo } = props;

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card-galeria">
                <a href={photo}>
                    <img className="w-100 mb-4 card-img-top" src={photo} />
                </a>
                <div className="text-center px-3 pb-1">
                    <h4>{title}</h4>
                    <p style={{ textAlign: 'justify' }}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default GaleriaItem;