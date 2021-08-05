import React, { Component } from 'react';

class Skills extends Component {
    render() {
        if (this.props.data) {
            var description = this.props.data.skillsdesc;
            var skills = this.props.data.skills.map(skill => {
                return (
                    <div key={skill.name} className="progress">
                        <span className="skill">{skill.name}<i className="val">{skill.percent}%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                );
            });
            var col1_skills = skills.slice(0, Math.ceil(skills.length / 2));
            var col2_skills = skills.filter(x => !col1_skills.includes(x));
        }

        return (
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Compétences</h2>
                        <p>{description}</p>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6" data-aos="fade-up">
                            {col1_skills}
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            {col2_skills}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;