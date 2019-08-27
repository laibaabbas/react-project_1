import React, { Component } from "react";
import data from "./Data"
import Header from './Header/Header';

import About from './About/About';
import Services from "./Servies/Services";
import Call from "./Call/Call"
import Portfolio from "./Portfolio/Portfolio";
import Team from './Team/Team';

import Footer from './Footer/Footer';
import Form from './Form/Form';



class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        data:data
      }
    }
  
  render() {
    return (
      <div >
        

      <Header header={this.state.data[0].header} nav={this.state.data[0].nav}/>

   <About about={this.state.data[0].about} />
   <Services services={this.state.data[0].services}/>
   <Call call={this.state.data[0].call} />
   <Portfolio portfolio={this.state.data[0].portfolio} />
   
   <Team team={this.state.data[0].Team}/>
 <Form form={this.state.data[0].form} />
   <Footer footer={this.state.data[0].footer}/>


   
      </div>
    );
  }
}
export default App;
