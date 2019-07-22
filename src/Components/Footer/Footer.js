import React, { Component } from 'react';
import { Icon } from 'antd';
import '../Footer/Footer.css';
import SocialMedia from './SocialMedia/SocialMedia';


class Footer extends Component {
    render() {
        return (
            <div className="Footer" ref={this.props.main}>
               <div className="FooterContent">
                    <div className="Footer-Details">
                        <h1>For more details</h1>
                            <p>Please don't hesitate to call or text the number 
                                provided in the website for immediate response, 
                                you can also drop a message thru the website email. 
                                Thank you!
                            </p>
                    </div>
                    <div className="Footer-ContactInformation">
                        <h1>Contact Information</h1>
                        <p> <Icon type="compass" /> Address: Poveda Gk Village Unit-22 Blk 60, Taguig City</p>
                        <p> <Icon type="phone" rotate={100} />   Mobile: +639558777197</p>
                        <p> <Icon type="mail" />    Email: Isaigmichael30@gmail.com</p>
                    </div>
               </div>
               <div className="SocialMedia">
                    <SocialMedia />
               </div>
               <div className="Footer-down">
                    <p className="Copyright">
                        Copyright © 2019 | Proudly Powered by GitHub
                    </p>                       
                </div>
          </div>
        );
    }
}

export default Footer;


