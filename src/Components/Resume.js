import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if (this.props.data) {
            var education = this.props.data.education.map(x => {
                return (
                    <div key={x.name} className="resume-item"><h4>{x.name}</h4><h5>{x.date}</h5><p><em>{x.location}</em></p><p>{x.summary}</p></div>
                );
            });
            var professional = this.props.data.professional.map(x => {
                return (
                    <div key={x.name} className="resume-item"><h4>{x.name}</h4><h5>{x.date}</h5><p><em>{x.location}</em></p><ul>{x.summary.map(y => { return (<li key={[x, y]}>{y}</li>); })}</ul><p>{x.environement}</p></div>
                );
            });
            var resumedownload = this.props.data.resumedownload;
        }

        return (
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Mon CV</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Diplomes et Formations</h3>
                            {education}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Experiences Professionnelles</h3>
                            {professional}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <a className="btn btn-primary btn-lg" href={resumedownload} target="_blank"><i className='bx bxs-download' ></i><span>Télécharger mon CV</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;