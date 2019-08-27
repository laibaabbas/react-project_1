import React, { Component } from 'react';

class Nav extends Component {
  
  render() { 
    let nav=this.props.nav[0].nav_list.map((v,i)=>{
      return(
        <li key={i}  className="nav-item ">
        <a className="nav-link text-white text-uppercase" href="#">{v.link}</a>
      </li>


      )
    })
    return (  <div className="nav">
    <div className="container py-3">
    <nav className="navbar navbar-expand-lg navbar-dark  sticky-top bg-visible text-capitalize">
 <a className="navbar-logo " href="#"><img src={this.props.nav[0].nav_title} alt=""/> </a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" 
 data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav ml-auto">
     {nav}
  
   </ul>
 </div>
</nav>
    </div>

   </div> );
  }
}
 
export default Nav;
