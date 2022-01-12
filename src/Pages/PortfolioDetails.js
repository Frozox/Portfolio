import React, { Component } from "react";
import $ from "jquery";
import { Redirect } from "react-router";

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  getData() {
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data.portfolio });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    var id = this.props.match.params.id;
    if (this.state.data.projects) {
      var project = this.state.data.projects.find(pj => pj.id === id);

      if(!project){
        return <Redirect to="/404" />;
      }
    }

    return project ? (
      <div className="className">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Portfoio Details</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper-container">
                  <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src={project.image} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={project.image} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={project.image} alt=""/>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <p>www.example.com</p>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim
                  cum deserunt eius.
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    ) : null;
  }
}

export default PortfolioDetails;