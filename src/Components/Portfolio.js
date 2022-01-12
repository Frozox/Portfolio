import React, { Component } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

class Portfolio extends Component {
    render() {
        if (this.props.data) {
            var description = this.props.data.description;
            var projects = this.props.data.projects.map(project => {
                return (
                    <div key={project.name} className={`col-lg-4 col-md-6 portfolio-item ${project.filter}`}>
                        <div className="portfolio-wrap">
                            <a href={project.image}>
                                <img src={project.thumbnail} className="img-fluid portfolio-img" alt="" />
                            </a>
                            <div className="portfolio-links">
                                <a href={`/projets/${project.id}`}><i className="bx bx-comment-detail"></i></a>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Mon Portfolio</h2>
                        <p>{description}</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">Tout</li>
                                <li data-filter=".filter-web">Site Web</li>
                                <li data-filter=".filter-webapp">Application Web</li>
                                <li data-filter=".filter-mobile">Application Mobile</li>
                                <li data-filter=".filter-other">Autre</li>
                            </ul>
                        </div>
                    </div>

                    <SRLWrapper>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                            {projects}
                        </div>
                    </SRLWrapper>
                </div>
            </section>
        );
    }
}

export default Portfolio;