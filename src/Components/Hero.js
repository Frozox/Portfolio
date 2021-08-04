import React, { Component } from 'react';
import Typed from 'react-typed';

class Hero extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var hero = this.props.data.hero;

            return (
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <h1>{name}</h1>
                        <p>Je suis <Typed strings={hero} typeSpeed={70} backSpeed={80} loop /></p>
                    </div>
                </section>
            );
        }

        return null;
    }
}

export default Hero;