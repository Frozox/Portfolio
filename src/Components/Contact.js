import React, { Component } from 'react';
import Iframe from 'react-iframe';
import EmailForm from './EmailForm';

class Contact extends Component {
    render() {
        if (this.props.data) {
            var location = this.props.data.address.full;
            var email = this.props.data.email;
            var phone = this.props.data.phone;
         }

        return (
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Localisation:</h4>
                                    <p>{location}</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>{email}</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Téléphone:</h4>
                                    <p>{phone}</p>
                                </div>

                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84091.19098063782!2d2.0491388560106607!3d48.80384678389578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67db475f420bd%3A0x869e00ad0d844aba!2s78000%20Versailles!5e0!3m2!1sfr!2sfr!4v1628169700973!5m2!1sfr!2sfr" frameBorder="0" width="100%" height="290px" allowFullScreen />
                            </div>

                        </div>

                        <EmailForm/>

                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;