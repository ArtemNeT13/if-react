import React from 'react';
import './ShowDataBlock.css';
import Slider from '../Slider/Slider';

const ShowDataBlock = ({title, data}) => {
    return (
        <section className="homes-guests">
            <div className="section-title">
                <h2>{title}</h2>
            </div>
            <div>
                <Slider data={data}/>
            </div>
        </section>
    );
}

export default ShowDataBlock;