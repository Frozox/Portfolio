import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import $ from 'jquery';

class EmailForm extends Component {
  constructor(props) {
	super(props);
	this.state = { name: '', email: '', subject: '', feedback: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
        return (
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="" method="post" className="php-email-form" id="contact-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Votre Nom</label>
                            <input type="text" className="form-control" name="name" onChange={this.handleChange} value={this.state.name} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Votre Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Sujet</label>
                        <input type="text" className="form-control" name="subject" onChange={this.handleChange} value={this.state.subject} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea className="form-control" name="feedback" onChange={this.handleChange} value={this.state.feedback} rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading" id="loading">Chargement</div>
                        <div className="error-message" id="error-message">Un problème est survenu. Veuillez réessayer plus tard.</div>
                        <div className="sent-message" id="sent-message">Votre message a bien été envoyé. Merci !</div>
                    </div>
                    <div className="text-center"><button className="btn btn-outline-dark" type="submit" onClick={this.handleSubmit} >Envoyer</button></div>
                </form>
            </div>
        )
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit (event) {
        event.preventDefault();

        const form = $('#contact-form').get(0);

        if(!form.checkValidity()){
            form.reportValidity();
        }
        else{
            $('#loading').show();
            $('#sent-message').hide();
            $('#error-message').hide();
            this.sendFeedback({from_name: this.state.name, reply_to: this.state.email, subject: this.state.subject, message: this.state.feedback});
        }
    }

    sendFeedback (variables) {
        const serviceId = 'service_tzbifqs';
        const templateId = 'template_5j2b9yh';

        emailjs.init("user_cOVbmmmpPDEOamjjiw2cC")
        emailjs.send(
            serviceId, templateId,variables
        ).then(() => {
            $('#loading').hide();
            $('#sent-message').fadeIn('slow').delay(5000).fadeOut('slow');
        }).catch((err) => {
            $('#loading').hide();
            $('#error-message').fadeIn('slow').delay(5000).fadeOut('slow');
            console.error(err);
        })
    }
}

export default EmailForm;