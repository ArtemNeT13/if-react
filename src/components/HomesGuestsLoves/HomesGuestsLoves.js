// import mops from 'src/components/images/arrowRight.png';
import React from 'react';


class HomesGuestsLoves extends React.Component {
    render() {
        return (
            <section className={"homes-guests col-sm-12"}>
                <div className={"section-title col-xl-12 col-sm-12"}>
                    <h2>Homes guests loves</h2>
                </div>
                <div id="homeGuests" className={"offer-hotel section-content col-xl-12"}>
                </div>
                {/*<img src={mops}*/}
                {/*     alt="right arrow" />*/}
            </section>
        );
    };
};

export default HomesGuestsLoves;