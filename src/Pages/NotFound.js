import { unique } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
// import './css/notfound.css'

const NotFound = () => (
    <main className="bsod container">
        <h1 className="neg title"><span className="bg">Error - 404</span></h1>
        <p>An error has occured, to continue:</p>
        <p>* Return to our homepage.<br />
            * Send us an e-mail about this error and try later.</p>
        <nav className="nav">
            <Link to="/">index</Link>&nbsp;|&nbsp;<a href="#" className="link">webmaster</a>
        </nav>
    </main>
);

export default NotFound;