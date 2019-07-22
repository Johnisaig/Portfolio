import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
                <Home />
                <About />
                <Experience />
                <Hire />
                <Skills />
                <Footer />
                <Switch>
                    <Route path="/" exact component={Navbar}/>
                    <Route path="/experience" exact component={Experience}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
