import React, { Component } from 'react';

class Skills extends Component {
    render() {
        if (this.props.data) {
            var description = this.props.data.skillsdesc;
            var skills = this.props.data.skills.map(skill => {
                return (
                    <div class="progress">
                        <span class="skill">{skill.name}<i class="val">{skill.percent}%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                );
            });
            var col1_skills = skills.slice(0, Math.ceil(skills.length / 2));
            var col2_skills = skills.filter(x => !col1_skills.includes(x));
        }

        return (
            <section id="skills" class="skills section-bg">
                <div class="container">
                    <div class="section-title">
                        <h2>Compétences</h2>
                        <p>{description}</p>
                    </div>
                    <div class="row skills-content">
                        <div class="col-lg-6" data-aos="fade-up">
                            {col1_skills}
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            {col2_skills}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;