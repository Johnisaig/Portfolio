import React, { Component } from 'react';
import logo from '../../Images/download.jpg';
import '../../Components/Navbar/Navbar.css';
import  HamburgerMenu from 'react-hamburger-menu';
import {Spring} from 'react-spring/renderprops';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    handleScrollHome = e => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      };

      handleScrollForHome = e => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        this.setState({ isOpen: !this.state.isOpen})
      };

    handleScroll = e => {
        e.preventDefault();
        window.scrollTo({
          top: 5500,
          left: 0,
          behavior: "smooth"
        });
        this.setState({ isOpen: !this.state.isOpen})
      };

    handleClickForAbout = e => {
        e.preventDefault();
        window.scrollTo({
          top: 665,
          left: 0,
          behavior: "smooth"
        });
        this.setState({ isOpen: !this.state.isOpen})
    };
    
    handleClickAbout = e => {
        e.preventDefault();
        window.scrollTo({
          top: 665,
          left: 0,
          behavior: "smooth"
        });
    };

    handleClickForExp = e => {
        e.preventDefault();
        window.scrollTo({
          top: 1490,
          left: 0,
          behavior: "smooth"
        });
        this.setState({ isOpen: !this.state.isOpen})
    };

    handleClickExp = e => {
        e.preventDefault();
        window.scrollTo({
          top: 1250,
          left: 0,
          behavior: "smooth"
        });
    };
 
    handleClickForSkills = e => {
        e.preventDefault();
        window.scrollTo({
          top: 2850,
          left: 0,
          behavior: "smooth"
        });
        this.setState({ isOpen: !this.state.isOpen})
    };

    handleClickSkills = e => {
        e.preventDefault();
        window.scrollTo({
          top: 2000,
          left: 0,
          behavior: "smooth"
        });
    };

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen})
        console.log(this.state.isOpen)
    }

    handleScrollContact = e => {
        e.preventDefault();
        window.scrollTo({
          top: 5500,
          left: 0,
          behavior: "smooth"
        });
      };

    render() {
        return (
            <div className="Menu">
               <div className="HamMenu">
                    <HamburgerMenu
                        isOpen={this.state.isOpen}
                        menuClicked={this.handleClick}
                        width={30}
                        height={15}
                        strokeWidth={3}
                        background="red"
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.1}
                    />
                </div>
                {
                    this.state.isOpen ? (
                        <Spring
                            from={{ opacity: 0,padding: 0 ,marginTop: -500 }}
                            to={{ opacity: 1, marginTop: -25}}
                        >
                            { props => (
                                <div style={props}>
                                    <div className="BurgerMenu">
                                        <div className="HeaderList">
                                            <ul>
                                                <li><a href="/" onClick={this.handleScrollForHome} style={{ color: 'steelblue', textDecoration: 'none' }}>Home</a></li>
                                                <br/>
                                                <li><a href="/about" onClick={this.handleClickForAbout} style={{ color: 'gray', textDecoration: 'none' }}>About</a></li>
                                                <br/>
                                                <li><a href="/experience" onClick={this.handleClickForExp} style={{ color: 'gray', textDecoration: 'none'}}>Experience</a></li>
                                                <br/>
                                                <li><a href="/skills" onClick={this.handleClickForSkills}  style={{ color: 'gray', textDecoration: 'none' }}>Skills</a></li>
                                                <br/>
                                                <li><a href="/contact" onClick={this.handleScroll}  style={{ color: 'gray', textDecoration: 'none' }}>Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>   
                                </div>     
                            )}
                         </Spring>
                    ) : null
                }
                <div className="Logo"  style={{ zIndex: -1 }}>
                    <img style={{ zIndex: -1 }} src={logo} width={140} height={65} alt="logo" />
                </div>
              <div className="Header-list">
                <ul>
                    <li><a href="/" onClick={this.handleScrollHome} style={{ color: 'steelblue' }}>Home</a></li>
                    <li><a href="/about" onClick={this.handleClickAbout}>About</a></li>
                    <li><a href="/experience" onClick={this.handleClickExp}>Experience</a></li>
                    <li><a href="/skills" onClick={this.handleClickSkills}>Skills</a></li>
                    <li><a href="/Contact" onClick={this.handleScrollContact}>Contact</a></li>
                </ul>
              </div>
            </div>
        );
    }
}

export default Navbar;