import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import '../Hired/Hire.css';

class Hire extends Component {
    render() {
        return (
            <div className="Hire">
                <div className="HireContent">
                    <h1 className="Project">HAVE ANY PROJECT IN MIND?</h1>
                      <a className="Email" href="mailto:isaigmichael30@gmail.com?Subject=Hello%20again" target="_top">
                            JUST SAY HELLO
                      </a>
                    <div className="HireMe">
                     <a href="mailto:isaigmichael30@gmail.com?Subject=Hello%20again" target="_top"> 
                        <Button size="large" type="primary">
                            HIRE ME
                            <Icon type="right" />
                        </Button>
                     </a>
                    </div>  
               </div>
              
          </div>
        );
    }
}

export default Hire;