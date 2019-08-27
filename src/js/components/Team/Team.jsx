import React, { Component } from 'react';

class Team extends Component {
  render() {
   let cards=this.props.team[0].container.map((v,i)=>{
      return(
        <div key={i} class="col-lg-3 col-md-6">
            <div class="member">
              <div class="pic"><img src={v.img} alt=""/></div>
              <h4>{v.h4} </h4>
              <span>{v.span} </span>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
      )
    })
     
    return (
      <section id="team">
      <div class="container wow fadeInUp" >
        <div class="section-header">
          <h3 class="section-title">{this.props.team[0].title} </h3>
          <p class="section-description">{this.props.team[0].para} </p>
        </div>
        <div class="row">
          {cards}
          {/* <div class="col-lg-3 col-md-6">
            <div class="member">
              <div class="pic"><img src="https://bootstrapmade.com/demo/themes/Regna/img/team-1.jpg" alt=""/></div>
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div> */}
{/* 
          <div class="col-lg-3 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/team-2.jpg" alt=""></div>
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/team-3.jpg" alt=""/></div>
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="member">
              <div class="pic"><img src="img/team-4.jpg" alt=""/></div>
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </section>
    );
  }
}

export default Team;
