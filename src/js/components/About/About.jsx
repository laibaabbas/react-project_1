import React, { Component } from 'react';

class About extends Component {
  render() {
    let about=this.props.about[0].about_list.map((v,i)=>{
      return(
        <div key={i} class="icon-box wow fadeInUp" data-wow-delay={v.anim} style=
        {{"visibility":" visible"," animation-name":" fadeInUp","animation-delay":`${v.anim}`}}>
        <div class="icon"><i class={`fa ${v.icon}`}></i></div>
        <h4 class="title"><a href="">{v.title} </a></h4>
        <p class="description">{v.para} </p>
      </div>
      )
    })
   
    return (
      <section id="about">
      <div class="container">
        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title"> {this.props.about[0].title}</h2>
            <p>
            {this.props.about[0].para}
               </p>
               {about}

         

          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInRight" style={{"visibility":" visible"," animation-name":" fadeInRight" ,"background-image":"url(https://bootstrapmade.com/demo/themes/Regna/img/about-img.jpg)"}}></div>
        </div>

      </div>
    </section>
    );
  }
}

export default About;
