import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Facts from './Components/Facts';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SimpleReactLightbox from 'simple-react-lightbox';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header data={this.state.data.main} />
        <Home data={this.state.data.main} />
        <div id="main">
          <About data={this.state.data.main} />
          {/* <Facts /> */}
          <Skills data={this.state.data.skills} />
          <Resume data={this.state.data.resume} />
          <SimpleReactLightbox>
            <Portfolio data={this.state.data.portfolio} />
          </SimpleReactLightbox>
          {/* <Services /> */}
          {/* <Testimonials /> */}
          <Contact />
        </div>
        <Footer />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
          className="bi bi-arrow-up-short"></i></a>
        <Helmet>
          <script src="assets/vendor/purecounter/purecounter.js"></script>
          <script src="assets/vendor/typed.js/typed.min.js"></script>
          {/* <script src="assets/vendor/glightbox/js/glightbox.min.js"></script> */}
          <script src="assets/js/main.js"></script>
        </Helmet>
      </div>
    );
  }
}

export default App;
