import React, { Component } from 'react';

class Call extends Component {
  render() {
    return (
        <section id="call-to-action" style={{"background-image":` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url(${this.props.call[0].img})`}}>
        <div class="container wow fadeIn" >
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h3 class="cta-title">{this.props.call[0].title} </h3>
              <p class="cta-text">{this.props.call[0].para} </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#">{this.props.call[0].btn} </a>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
}

export default Call;
