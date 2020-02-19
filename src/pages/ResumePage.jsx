import React, { Component } from 'react'
import CardComponent from '../components/CardComponent'



class ResumePage extends Component {
    state = { 
        education: [
            {
                name: 'Baton Rouge Community College',
                image: 'brcc_logo.jpg',
                info: 'Associate of Science in Computer Science',
                years: '2017-2018'
            },
            {
                name: 'Baton Rouge Community College',
                image: 'brcc_logo.jpg',
                info: 'Associate of Science in Nursing',
                years: '2013-2014'
            },
            {
                name: 'Louisiana School for Math, Science, and Arts',
                image: 'lsmsa_logo.jpg',
                info: 'High School Diploma',
                years: '2002-2004'
            }
        ],
        workExp: [
            {
                name: 'IBM',
                image: 'ibm_logo.png',
                info: 'SAP Technical Specialist- SAP NextGen UX & Mobile Developer',
                years: '2019-Current'
            },
            {
                name: 'Our Lady of the Lake Hospital - Emergency Room',
                image: 'olol_logo.png',
                info: 'Registered Nurse',
                years: '2015-2019'
            }
        ],
        skills: [
            {
                name: 'Javascript',
                image: 'js_logo.jpg'
            },
            {
                name: 'HTML 5',
                image: 'html_logo.png'
            },
            {
                name: 'CSS 3',
                image: 'css_logo.png'
            },
            {
                name: 'React',
                image: 'react_logo.png'
            },
            {
                name: 'Node JS',
                image: 'node_logo.png'
            },
            {
                name: 'SAP UI5',
                image: 'ui5_logo.png'
            },
            {
                name: 'Python',
                image: 'python_logo.jpg'
            }
        ]
    }
    render() { 
        return ( 
            <div className="pageComponentStyle">
                <h2>Resume</h2>
                <h4 className="mx-4">Education</h4>
                {this.state.education.map((item) =>
                    <CardComponent name={item.name} years={item.years} image={item.image} info={item.info}/>
                )}
                <h4 className="mx-4">Work Experience</h4>
                {this.state.workExp.map((item) =>
                    <CardComponent name={item.name} years={item.years} image={item.image} info={item.info}/>
                )}
                <h4 className="mx-4">Skills</h4>
                {this.state.skills.map((item) =>
                    <CardComponent name={item.name} years={null} image={item.image} info={null}/>
                )}               
            </div>
        );
    }
}

export default ResumePage;