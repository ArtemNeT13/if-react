import React from "react";
import './HeaderApps.css';

const HeaderApps = () => {
    return(
        <div className="header-apps col-xl-12">
            <img src={require('../../../images/google-play-badge.png')} alt="google play badge" />
            <img src={require('../../../images/App_Store_Badge.png')} alt="app store badge" />
        </div>
    );
}

export default HeaderApps;