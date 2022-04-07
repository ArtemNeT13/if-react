import React from 'react';
import './HomesGuestsLoves.css';
import Slider from '../Slider/Slider';

class HomesGuestsLoves extends React.Component {
    render() {
        return (
            <section className="homes-guests">
                <div className="section-title">
                    <h2>Homes guests loves</h2>
                </div>
                <div>
                    <Slider />
                </div>
            </section>
        );
    };
}

export default HomesGuestsLoves;