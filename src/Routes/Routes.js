import React, { Component } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Experience from '../Components/Experience/Experience';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Hire from '../Components/Hired/Hire';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Home style={{ zIndex: -9999 }}/>
                <About />
                <Experience />
                <Hire />
                <Skills />
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Routes;
