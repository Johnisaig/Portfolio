import React from 'react';
import '../Experience/Experience.css';
import Stratpoint  from '../../Images/Stratpoint.png';
import SilverFinanceLogo from '../../Images/SilverFinanceLogo.jpeg';
import 'animate.css';


export class Experience extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {
            fadeInUp: '',
            fadeIn: '', 
          };
    }

    isBottom = (el) => {
        return el.getBoundingClientRect().top <= window.innerHeight;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const wrappedElement = document.getElementById('x');
        if (this.isBottom(wrappedElement)) {
            document.removeEventListener('scroll', this.handleScroll);
            this.setState({
                fadeInUp: 'animated fadeInUp',
                fadeIn: 'animated fadeIn delay-1s'
            });
        } 
    };
    
        render(){
            return (
            <div className="Experience" id="x">
                <div className="Exp-Education">
                     <h1 className={this.state.fadeInUp}>PROFESSIONAL EXPERIENCE</h1>
                    </div>
                        <div className="Stratpoint">
                            <div className="Stratpoint-logo">
                                <img className={this.state.fadeIn} src={Stratpoint} width={240} height={278} alt="stratpoint" />
                            </div>
                            <div className="Stratpoint-Content">
                                <h1 className={this.state.fadeInUp}>JR. QUALITY ASSURANCE | APPLICATION SUPPORT</h1>
                                <h2 className={this.state.fadeInUp}>OCTOBER 22, 2018 – MAY 28, 2019</h2>
                                <p>&#xbb; Create detailed, comprehensive and well-structured test plans and test cases </p>
                                <p>&#xbb; Estiate, prioritize, plan and coordinate testing activities</p>
                                <p>&#xbb; Identify, record, document thoroughly and track bugs</p>
                                <p>&#xbb; Perform thorough regression testing when bugs are resolved</p>
                                <p>&#xbb; Developed and apply testing progcesses for new and existing products to meet
                                        client needs.</p>
                            </div>
                    </div>
                <div className="SilverFinance">
                    <div className="SilverFinance-Logo">
                        <img className={this.state.fadeIn} src={SilverFinanceLogo} width={250} height={230} alt="Silverfinance" />
                    </div>
                    <div className="SilverFinance-Content">
                        <h1 className={this.state.fadeInUp} >Internship | Silver Finance Group of Companies</h1>
                        <h2 className={this.state.fadeInUp}>JUNE 2017 – JANUARY 2018</h2>
                        <p>Troubleshooting – Configuring Proxy Server, Fixing Internet Connection,
                            Installing LAN Cable.
                        </p>
                        <p>Technical Support – Insatalling Software/Application, Formatting Operating</p>
                        <p>Progrmmer – Create Basic form PHP (Codeigniter Framework)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;