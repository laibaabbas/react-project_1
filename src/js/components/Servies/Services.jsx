import React, { Component } from 'react';

class Services extends Component {
  render() {
    let boxs=this.props.services[1].cards.map((v,i)=>{
      return(
        <div key={i} class="col-lg-4 col-md-6">
        <div class="box text-center">
          <div class="icon"><a href=""><i class={`fa ${v.icon}`}></i></a></div>
          <h4 class="title"><a href="">{v.span}</a></h4>
          <p class="description">{v.description}</p>
        </div>
      </div>
      )
    })
  
     
    return (
     
      <section id="services">
      <div class="container wow fadeIn " style={{"visibility":" visible", "animation-name":" fadeIn"}}>
        <div class="section-header text-center">
          <h3 class="section-title">Services</h3>
          <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div class="row">
          {boxs}
          {/* <div class="col-lg-4 col-md-6">
            <div class="box text-center">
              <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div> */}
          {/* <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-bar-chart"></i></a></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-paper-plane"></i></a></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-photo"></i></a></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-road"></i></a></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-shopping-bag"></i></a></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> */}
        </div>

      </div>
    </section>
    );
  }
}

export default Services;
