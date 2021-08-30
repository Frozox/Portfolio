import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFound extends Component{
    render () {
        return(
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container">
                    <h1>Erreur 4
                        <i className="bx bx-sad bx-tada bx-md"></i>
                        4
                    </h1>
                    <p>Page introuvable</p>
                    <a href="/" className="d-grid">
                        <button className="btn btn-outline-light btn-lg" type="button"><i class='bx bx-undo'></i>Retour à la page principale</button>
                    </a>
                </div>
                <Helmet>
                    <script src="assets/js/vantaglobe.js"></script>
                </Helmet>
            </section>
        );
    }
}

export default NotFound;