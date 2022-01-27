import React, { Component } from 'react'
import MainMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';
import Parser from 'rss-parser';
import './home.css';
// import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
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
        const feed = await parser.parseURL('https://data.maarek.io/kevinmaarek')
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
                        The one you need
                    </h2>
                    <p>
                        Working on various projects, side-rpojects or in <b>T-Shape</b> environements, I had the opportunity to develop with
                        many technologies and plateforms such as <b>React</b>, <b>Go</b> or <b>NodeJS</b> and many more.
                    </p>
                    <h3>Curious and interested by nature,</h3>
                    <p>
                        Front end, web apps, Dapp,  mobile native apps, back ends, REST APIs, you name it!
                        <br/>
                        Recently, I've been completely absorbed by the Web3 universe.
                        <br/>
                        Looking for a dev for your next NFT project? You are in the right place.
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
            <Footer />
        </div>
        )
    }
}

export default Home;
