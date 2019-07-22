import React, { Component } from 'react';
import  '../Skills/Skills.css';
import { Progress } from 'antd';


class Skills extends Component {

    constructor(props){
        super(props);
        this.state ={
            width: 0
        }
    }
    render() {
        return (
            <div className="Skills">
               <div className="Title">
                  <h1>My Expertise Areas</h1>
               </div>
                 <div className="Tech-Skills">
                    <div className="ProgrammingLanguage">
                        <h1>Programing Language</h1>
                        <p>JavaScript</p>
                        <Progress 
                            percent={76} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                        <p>C# .NET</p>
                        <Progress 
                            percent={70} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                          <p>VB .NET</p>
                        <Progress 
                            percent={88} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                          <p>PHP</p>
                        <Progress 
                            percent={63} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                    </div>
                    <div className="DataBase">
                        <h1>Database</h1>
                        <p>MYSQL</p>
                        <Progress 
                            percent={89} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                        <p>SQL SERVER</p>
                        <Progress 
                            percent={80} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                          <p>POSTGRESQL</p>
                        <Progress 
                            percent={68} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                    </div>
                    <div className="Branding">
                        <h1>Branding</h1>
                        <p>Adobe Photoshop</p>
                        <Progress 
                            percent={86} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                        <p>Adobe XD</p>
                        <Progress 
                            percent={70} 
                            status="active"
                            showInfo={true}
                            strokeWidth={10}
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            style={{ color: 'white'  }}
                        />
                    </div>
                 </div>
            </div>
        );
    }
}

export default Skills;  