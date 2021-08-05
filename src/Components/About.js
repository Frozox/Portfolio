import React, { Component } from 'react';
class About extends Component {
    render() {
        if (this.props.data) {
            var entitled = this.props.data.entitled;
            var birthday = this.props.data.birthday;
            var age = this.props.data.age;
            var website = this.props.data.website;
            var degree = this.props.data.degree;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var city = this.props.data.address.city;
            var bio = this.props.data.bio;
        }

        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>À Propos</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>{entitled}</h3>
                            <p className="fst-italic"></p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i><strong>Date de naissance:</strong><span>{birthday}</span></li>
                                        <li><i className="bi bi-chevron-right"></i><strong>Site internet:</strong><span>{website}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Téléphone:</strong><span>{phone}</span></li>
                                        <li><i className="bi bi-chevron-right"></i><strong>Localisation:</strong><span>{city}</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i><strong>Age:</strong><span>{age}</span></li>
                                        <li><i className="bi bi-chevron-right"></i><strong>Diplôme:</strong><span>{degree}</span></li>
                                        <li><i className="bi bi-chevron-right"></i><strong>Email:</strong><span>{email}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About