import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';

class Home extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var hero = this.props.data.hero;
        }

        return this.props.data ? (
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>{name}</h1>
                    <p>Je suis <Typed strings={hero} typeSpeed={70} backSpeed={80} loop /></p>
                </div>
                <Helmet>
                    <script src="assets/js/vantaglobe.js"></script>
                </Helmet>
            </section>
        ) : null;
    }
}

export default Home;