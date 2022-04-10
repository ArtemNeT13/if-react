import React from 'react';
import './Navigate.css';

const Navigate = () => {
    return(
        <nav className="header-logo col-xl-12 col-sm-12">
            <div>
                <img src={require('../../../images/logo.svg').default} alt="logo" />
            </div>
            <div className="header-menu">

                <div className="header-links">
                    <div className="underline-stays">
                        <p>Stays</p>
                    </div>

                    <div className="underline-attractions">
                        <p>Attractions</p>
                    </div>
                </div>

                <div className="header-img">
                    <div className="image-sun">
                        <img src={require('../../../images/Night.svg').default} alt="night" />
                    </div>
                        <img src={require('../../../images/AccountHeader.svg').default} alt="account" />
                        <div className="humburger-menu">
                            <div className="humburger"> </div>
                            <div className="humburger"> </div>
                            <div className="humburger"> </div>
                        </div>
                    </div>
                </div>
        </nav>
    );
}

export default Navigate;