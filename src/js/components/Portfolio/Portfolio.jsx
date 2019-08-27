import React, { Component } from 'react';

class Portfolio extends Component {
    
  render() {
   
    let blog=this.props.portfolio[0].container.map((v,i)=>{
      return(
        <div key={i} class="col-lg-3 col-md-6 portfolio-item filter-app">
        <a href="">
          <img src={v.img} alt=""/>
          <div class="details">
            <h4>{v.h4} </h4>
            <span>{v.span} </span>
          </div>
        </a>
      </div>
      )
    })
  
    
    return (
        <section id="portfolio">
        <div class="container wow fadeInUp" >
          <div class="section-header">
            <h3 class="section-title">{this.props.portfolio[0].title} </h3>
            <p class="section-description">{this.props.portfolio[0].para} </p>
          </div>
          <div class="row">
  
            <div class="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-logo">Logo</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
  
          <div class="row" id="portfolio-wrapper">
              {blog}
          
          </div>
  
        </div>
      </section>
    );
  }
}

export default Portfolio;
