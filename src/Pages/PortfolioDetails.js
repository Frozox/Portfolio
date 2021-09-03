import React, { Component } from 'react';
import $ from 'jquery';

class PortfolioDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    getData() {
        $.ajax({
            url: '/data.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ data: data.portfolio });
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
        var id = this.props.match.params.id;
        if (this.state.data.projects) {
            var project = this.state.data.projects;
        }

        return (
            <section id="portfoliodetails">
            </section>
        );
    }
}

export default PortfolioDetails;