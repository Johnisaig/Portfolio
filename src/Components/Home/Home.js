import React, { Component } from 'react';
import '../Home/Home.css';
import { Carousel } from 'antd';
import kel from '../../Images/60751952_2346240132104460_6796298400275890176_n.jpg';
import kel1 from '../../Images/kel1.jpg';
import kel2 from '../../Images/meetup.jpeg';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      dotPosition: 'bottom'
    }
  }
  render(){
      return(
          <div className="Home">
             <Carousel className="ant-carousel" dotPosition={this.state.dotPosition}  autoplay effect="fade" >
                <div> 
                  <img className="Images" src={kel} alt="kel" />
                </div>
                <div>
                  <img className="Images" src={kel2} alt="kel" />
                </div>
                <div>
                <img className="Images" src={kel1} alt="kel" />
              </div>
              </Carousel>
          </div>
      )
  }

}

export default Home;

