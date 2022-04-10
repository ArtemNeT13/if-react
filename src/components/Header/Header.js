import React from 'react';
import './Header.css';
import TopForm from './TopForm/TopForm';
import HeaderApps from './HeaderApps/HeaderApps';
import Navigate from './Navigate/Navigate';
import TopText from "./TopText/TopText";

const Header = () => {
        return (
            <header className="header">
            <div className="header-content">
                <Navigate />
                <TopText />
                <TopForm />
                <HeaderApps />
            </div>
            </header>
        );
}

export default Header;