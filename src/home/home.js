import React, { Component } from 'react'
import MainMenu from '../components/menu';
import Parser from 'rss-parser';
import './home.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feed: []
        }
    }

    async componentDidMount() {
        const parser = new Parser()
        const feed = await parser.parseURL('https://dev.to/feed/kevinmaarek')
        const elems = feed.items.map((item) => {
            return ({title: item.title, link: item.link})
        })
        this.setState({feed: [elems[0], elems[1], elems[2], elems[3]]})
    }

    render() {
        return (
        <div>
            <MainMenu activeItem='home' />
            <div class="container">
            <div class="section">
                <div class="presentation">
                    <div class="ui two column stackable grid">
                        <div class="center aligned column right-float">
                            <img src="https://www.gravatar.com/avatar/c79d64c623fe657519e9ee790bfc7865?s=400" class="profile" alt="Gravatar profil" />
                        </div>
                        <div class="column">
                            <br />
                            <span class="wave">👋</span>
                            <h1 class="text-primary-color">
                                Hi, my name is Kevin
                            </h1>
                            <p>
                                I am a Software developer. 👨🏻‍💻<br />
                                Currently working as a R&D Software Engineer at <a href="https://www.welcometothejungle.com/fr/companies/freebox"><span class="company">Freebox</span></a> in Paris 🇫🇷.
                                <br /><br />
                                Let me develop the app of your dreams 🧚🏻
                            </p>
                            <Link to='/resume'>
                                <Button content='More about my work and my experience' icon='right arrow' labelPosition='right' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="separator waves"> </div>
            <div class="section secondary-color">
                <div class="otherStuff">
                    <h2>
                        Swift but not only...
                    </h2>
                    <p>
                        Working on various projects, side-rpojects or in <b>T-Shape</b> environements, I had the opportunity to develop with
                        many other technologies and plateforms such as <b>React</b>, <b>Go</b> or <b>NodeJS</b> and many more.
                    </p>
                    <h3>Curious and interested by nature,</h3>
                    <p>
                        I have worked on web apps, server backends with REST APIs, and even Dapps on the Ethereum blockchain.
                    </p>
                    <br/><br/>
                    <div class="ui three column grid">
                    <div class="column center aligned">
                        <i class="react icon techLogo" style={{"color":"#61dafb"}}></i>
                        <br/>
                        React
                    </div>
                    <div class="column center aligned">
                        <i class="node icon techLogo" style={{"color":"#43853d"}}></i>
                        <br/>
                        NodeJS
                    </div>
                    <div class="column center aligned">
                        <i class="ethereum icon techLogo" style={{"color":"rgb(77, 28, 225)"}}></i>
                        <br/>
                        Solidity
                    </div>
                    </div>
                    <br/><br/>
                    <div class="ui two column grid">
                    <div class="column center aligned">
                        <i class="html5 icon techLogo" style={{"color":"rgb(255, 141, 1)"}}></i>
                        <br/>
                        HTML5
                    </div>
                    <div class="column center aligned">
                        <i class="database icon techLogo" style={{"color":"rgb(29, 143, 122)"}}></i>
                        <br/>
                        Different DBMS paradigms
                    </div>  
                    </div>
                </div>
            </div>
            <div class="section secondary-color">
                <div class="publications">
                    <h2>
                        Recent Posts
                    </h2>
                    <p>
                        I frequently write about my work.<br/>
                        Here are some of my latest articles :<br/>
                    </p>
                    <p>
                        {this.state.feed.map((item, index) => {
                            return (
                                <h4 key={index} class="feed-item-title"><a href={item.link} target="blank">{item.title}</a></h4>
                            )
                        })}
                    </p>
                </div>
            </div>
            <div className="separator waves2"> </div>
            <div className="section">
                <div className="contact centered">
                    <div>
                        <h2>
                            Come say hi!
                        </h2>
                        <a href="mailto:kevin@maarek.io">kevin (at) maarek.io</a><br/><br/>
                        <p>
                            <p className="icons">
                            <a href="https://twitter.com/kevinmaarek"><i className="fab fa-twitter"></i></a>
                                &nbsp; 
                                <a href="https://www.linkedin.com/in/kevinmaarek/"><i className="fab fa-linkedin"></i></a>
                                &nbsp; 
                                <a href="https://github.com/que20/"><i className="fab fa-github"></i></a>
                                &nbsp; 
                                <a href="https://www.instagram.com/kevin.maarek/"><i className="fab fa-instagram"></i></a>
                                &nbsp; 
                                <a href="https://dev.to/kevinmaarek"><i className="fab fa-dev"></i></a>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="section centered">
                <span style={{"fontSize": "10px"}}>
                    Kevin Maarek 2022
                </span>
            </div>
        </div>
        )
    }
}

export default Home;
