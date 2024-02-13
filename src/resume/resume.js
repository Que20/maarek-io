import React, { Component } from 'react'
import MainMenu from '../components/menu/menu';
import { Button, Icon } from 'semantic-ui-react';
import './resume.css';
// import 'semantic-ui-css/semantic.min.css';

const data = require('./data.json').data;

class Resume extends Component {
    download = () => {
        // window.print()
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
                                    Last update : Oct. 27 2022
                                    <br />
                                    <a href="KevinMAAREK.pdf">
                                        <button onClick={this.download}>Download a pdf version of my resume</button>
                                    </a>
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
                
                <div class="skill">
                <div class="skills-field">
                    Programming Languages
                </div>
                <div class="skills">
                    <ul>
                        <li>Swift, Objective-C</li>
                        <li>Good understanding in Go, JS and Python</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skills-field">
                    iOS Frameworks
                </div>
                <div class="skills">
                    <ul>
                        <li>UI: UIKit, SwiftUI</li>
                        <li>Data: Core Data</li>
                        <li>Other: ARKit, HealthKit, MapKit, WatchKit, StoreKit</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skills-field">
                    Development Tools
                </div>
                <div class="skills">
                    <ul>
                        <li>IDE: Xcode, VSCode, VIM</li>
                        <li>Dependancies: CocoaPods, Carthage, Swift Package Manager</li>
                        <li>Performance Optimization: Instruments Profiling, Memory Management</li>
                        <li>DBMS: Graph (CoreData), SQL (with MySQL, PostgreSQL), NoSQL (with MongoDB)</li>
                        <li>CI/CD: Jenkins, Fastlane, Bitrise</li>
                        <li>Accessibility: Adaptive Layout, VoiceOver, Dynamic Types</li>
                        <li>Git</li>
                        <li>TestFlight</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skills-field">
                    Design Patterns & Architectural Paradigms
                </div>
                <div class="skills">
                    <ul>
                        <li>Swift Composable Architecture</li>
                        <li>Model-View-Controller (MVC)</li>
                        <li>Model-View-ViewModel (MVVM and MVVM-C)</li>
                        <li>Model-View-Presenter (MVP)</li>
                        <li>Clean Architecture</li>
                        <li>Reactive Programming</li>
                        <li>Singleton</li>
                        <li>Observer</li>
                        <li>Delegate</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skills-field">
                    Networking
                </div>
                <div class="skills">
                    <ul>
                        <li>URLSession, Alamofire</li>
                        <li>REST, WebSockets, SSE</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
            
            <div class="skill">
                <div class="skills-field">
                    Testing
                </div>
                <div class="skills">
                    <ul>
                        <li>XCTest</li>
                        <li>UI Testing</li>
                        <li>Unit Testing</li>
                        <li>Screenshot Testing</li>
                    </ul>
                </div>
            </div>

            <div class="skill">
                <div class="skills-field">
                    Other Skills
                </div>
                <div class="skills">
                    <ul>
                        <li>Agile Methodologies (Scrum, Kanban)</li>
                        <li>Problem-Solving Skills</li>
                        <li>Communication Skills</li>
                        <li>Team Collaboration</li>
                        <li>Project Management</li>
                    </ul>
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
            <h6 className="copyright no-print">Copyright © {new Date().getFullYear()} Kevin MAAREK</h6>
            </div>
        )
    }
}

export default Resume;
