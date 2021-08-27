import React, { Component } from 'react';

class Skills extends Component {
    render() {
        if (this.props.data) {
            var skills = this.props.data.map(category => {
                return (
                    <div key={category.title} className="row" data-aos="fade-up" data-aos-delay="100">
                        <h3>{category.title}</h3>
                        <div className="col-lg-6">
                            {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map(skill => {
                                return (
                                    <div key={skill.name} className="progress">
                                        <span className="skill">{skill.name}<i className="val">{skill.percent}%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" style={{background: category.color}} role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-lg-6">
                            {category.skills.filter(x => !category.skills.slice(0, Math.ceil(category.skills.length / 2)).includes(x)).map(skill => {
                                return (
                                    <div key={skill.name} className="progress">
                                        <span className="skill">{skill.name}<i className="val">{skill.percent}%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" style={{background: category.color}} role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            });
        }

        return (
            <section id="skills" className="skills section-bg">
                <div className="container skills-content">
                    <div className="section-title">
                        <h2>Mes Compétences</h2>
                    </div>
                    {skills}
                </div>
            </section>
        );
    }
}

export default Skills;