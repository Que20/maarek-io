import React, { Component } from 'react'
import MainMenu from '../components/menu/menu';
import { Button, Icon } from 'semantic-ui-react';
import './resume.css';
// import 'semantic-ui-css/semantic.min.css';

const data = require('./data.json').data;

class Resume extends Component {
    download = () => {
        window.print()
    }

    render() {
        return (
            <div>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" /> */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
                <div className="no-print">
                    <MainMenu activeItem='resume' />
                </div>
                <div className="resume-container">
                <div className="resume-header">
                    <div className="ui two column stackable grid">
                        <div className="column right-float">
                            <div className="header-left">
                                <img src="https://www.gravatar.com/avatar/c79d64c623fe657519e9ee790bfc7865?s=400" className='profile-pic' alt="my profile" />
                            </div>
                            <div className="header-right">
                                <h1 className="name">
                                    Kevin MAAREK
                                </h1>
                                <div className="title">
                                    Software Developer
                                </div>
                                <div className="no-print">
                                    <a href="https://twitter.com/kevinmaarek">
                                    <Button color='twitter'>
                                        <Icon name='twitter' /> Follow me
                                    </Button>
                                    </a>
                                    <br />
                                    <div className="social"> 
                                        <a href="https://dev.to/kevinmaarek">
                                            <i className="fab fa-dev"></i>
                                        </a>
                                        <a href="https://github.com/que20/">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.instagram.com/kevin.maarek/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div style={{"clear":"both"}}></div>
                        </div>
                        <div className="column">
                            <div className="last-update">
                                <div className="no-print">
                                    Last update : Oct. 27 2021
                                    <br />
                                    <button onClick={this.download}>Download a pdf version of my resume</button>
                                </div>
                            </div>
                            <div className="info">
                                <div className="real-info">
                                    kevin@maarek.io ✉️ <br />
                                    http://maarek.io/ 🔗 <br />
                                </div>
                                Paris, France 📍 <br />
                                <div className="linkedIn no-print">
                                    <a href="https://www.linkedin.com/in/kevinmaarek/">Find me on <i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="section">Employment History 💼</h2>
                    {data.map((job, index) => {
                        return (
                            <div key={index} className="job">
                                {job.img !== "" ? <img src={job.img} height={job.img_height} alt="Company logo" /> : null}
                                {job.mark_current ? <span className="current">Current position</span> : null}
                                <div className="job-title">
                                    ⟩ {job.title} at <span className="company-name">{job.company}</span>
                                </div>
                                <div className="employment-period">
                                    {job.contract} ({job.dates.from} - {job.dates.to}) {job.location}
                                </div>
                                <div className="job-description">
                                    {job.intro === "" ? null : <p className="intro-text">{job.intro}</p>}
                                    <ul>
                                    {job.missions.map((mission, index2) => {
                                        return (
                                            <div key={index2}>
                                            <li> {mission.task} </li>
                                            {mission.subtasks.map((st, index3) => {
                                                return (
                                                    <ul key={index3}>
                                                    <li> {st} </li>
                                                    </ul>
                                                )
                                            })}
                                            </div>
                                        )
                                    })}
                                    </ul>
                                    <ul className="tag-list">
                                        {job.tags.map((tag, tagIndex) => {
                                            return (
                                                <li key={tagIndex} className="tag">
                                                    {tag}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <br />
                                </div>
                            </div>
                        )
                    })}
                    
                    {/* <!-- <div className="newpage"></div> --> */}

                <br />

                <h2 className="section">Skills 💪</h2>

                <div className="skills-field">
                    Programming :
                </div>
                <div className="skills">
                    <p>
                        Good expertise level of the most used programming paradigms in Swift : object oriented and protocol oriented. <br />
                        Strong knowledge in scripting programming and usage of their interpreter. <br />
                        Good knowledge in functional and procedural. <br />
                        → Swift, Objective-C, Java, Javascript, Go, C, Bash, Python.
                    </p>
                </div>

                <div className="skill">
                    <div className="skills-field">
                        Design Patterns :
                    </div>
                    <div className="skills">
                        <p>
                            → Creational : Singleton <br />
                            → Structural : MVC, MVVM, VIPER <br />
                            → Behavioral : Observer (RX)
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skills-field">
                        Frameworks :
                    </div>
                    <div className="skills">
                        <p>
                            Strong knowledge in the Apple ecosystem OS (iOS, iPadOS, WatchOS and tvOS) frameworks<br />
                            → CocaTouch+UIKit/SwiftUI <br />
                            <br />

                            Good understanding of OpenCV's Image Processing framework<br />

                            Other GUI frameworks such as SDL for C, pyQt and Tk for Python.
                        </p>
                    </div>
                </div>
                
                <div className="skill">
                    <div className="skills-field">
                        DBMS :
                    </div>
                    <div className="skills">
                        <p>
                            NoSQL (with MongoDB) and SQL (with MySQL, PostgreSQL). <br />
                            CoreData for Apple systems.
                        </p>
                    </div>
                </div>

                <br />
                <h2 className="section">Education 🎓</h2>

                <div className="education">
                    <div className="year-degree">
                        2014 : Bachelor Software Architecture
                    </div>
                    <div className="school-name">
                        ESGI, Paris 12e
                    </div>
                    <div className="degree-info">
                        Extra Curriculum : Founder and President of the Coding Dojo Club
                    </div>
                </div>

                <div className="education">
                    <div className="year-degree">
                        2012 : Higher Degree Certificate in Software & IT
                    </div>
                    <div className="school-name">
                        Saint Michel de Picpus, Saint Mandé
                    </div>
                    <div className="degree-info">
                        Spécialisation : Software development
                    </div>
                </div>

                <div className="education">
                    <div className="year-degree">
                        2011 : Baccalaureate in Social and Economical Sciences		
                    </div>
                    <div className="school-name">
                        Cours Progress, Paris 3e
                    </div>
                    <div className="degree-info">
                    </div>
                </div>

                <br />
                <h2 className="section">Languages 🌍</h2>

                <div className="languages">
                    <p>
                        🇫🇷 Français : read, write, speak <span style={{"color": "gray"}}>native</span>  <br />
                        🇺🇸 English : read, write, speak <br />
                    </p>
                </div>

                <br />
                <h2 className="section">Anything else ? 😊</h2>

                <ul>
                    <li>I can play all the Red Hot Chili Peppers riffs with my guitar. 🎸</li>
                    <li>I cook a great shakshuka, the famous Mediterranean meal. 🥘</li>
                </ul>
            </div>
            <h6 className="copyright no-print">Copyright © 2021 Kevin MAAREK</h6>
            </div>
        )
    }
}

export default Resume;
