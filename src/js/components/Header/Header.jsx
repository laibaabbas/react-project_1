import React, { Component } from 'react';
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <div className="header bg-cover" style={{"background-image":`url(${this.props.header[0].header_bg_img})`}}>
           <Nav  nav={this.props.nav}/>
           <div class="bg-overlay"></div>
           <div class="container d-flex h-90">
           <div class="row justify-content-center align-items-center w-100">
                <div class="col-md-12 ">
                    <div class="banner-content">
                       
                        
            
      <h1> {this.props.header[0].title} </h1>
      <h2> {this.props.header[0].para} </h2>
      <a href="#about" class="btn-get-started">{this.props.header[0].btn} </a>
    
                       
    
                    </div>
                </div>
            </div>

    </div>
            </div>
    );
  }
}

export default Header;
