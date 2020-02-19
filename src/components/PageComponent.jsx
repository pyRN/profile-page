import React, { Component } from 'react'
import ResumePage from '../pages/ResumePage'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'
import ContactPage from '../pages/ContactPage'
import {Router as ReachRouter} from '@reach/router'

class PageComponent extends Component {
    state = {  }

    render() { 
        return (  

            <div className="container innerDivStyle">
                <div className="shadow-lg my-5 mx-1 mb-5 cardStyle">
                        <ReachRouter>
                            <AboutPage path='/'/>
                            <ResumePage path='/resume'/>
                            <ProjectsPage path='/projects'/>                
                            <ContactPage path='/contact'/>
                        </ReachRouter>
                </div>
            </div>
            
        );
    }
}

export default PageComponent;