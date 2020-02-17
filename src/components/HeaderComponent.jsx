import React, { Component } from 'react'
import { Link } from "@reach/router"
class HeaderComponent extends Component {
    state = {  }

    render() { 
        return (  
            <div>
                <nav className="navbar navbar-expand-md navbar-dark static-top mb-2 shadow-lg">
                    <div className="container">
                        <h2 className="navbar-brand">Jacob Mayeux</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"    
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" >
                                    <Link className="nav-link linkStyle" to="/">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link linkStyle" to="/resume">Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link linkStyle" to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link linkStyle" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        );
    }
}

export default HeaderComponent;