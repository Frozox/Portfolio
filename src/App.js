import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';

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
      url: '/Data.json',
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
        <Header data={{ main: this.state.data.main, nav: this.state.data.nav }} />
        <Hero data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
