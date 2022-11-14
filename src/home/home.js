import React, { Component } from 'react'
import MainMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';
import Parser from 'rss-parser';
import './home.css';
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

        const observer = new IntersectionObserver((es) => {
            es.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('show')
                } else {
                    e.target.classList.remove('show')
                }
            })
        })
        const hidden = document.querySelectorAll('.hidden')
        hidden.forEach((e) => observer.observe(e))
    }

    render() {
        return (
        <div>
            <MainMenu activeItem='home' />
            <div className="container">
            <div className="section">
                <div className="presentation">
                    <div className="ui two column stackable grid">
                        <div className="center aligned column right-float">
                            <img src="https://www.gravatar.com/avatar/c79d64c623fe657519e9ee790bfc7865?s=400" className="profile" alt="Gravatar profil" />
                        </div>
                        <div className="column">
                            <br />
                            <span className="wave hand-wave">👋</span>
                            <h1 className="text-gradient handwriting-style">
                                Hi, my name is Kevin
                            </h1>
                            <p>
                                I am a Software developer. 👨🏻‍💻<br />
                                Currently working as an iOS Engineer at <a href="https://www.welcometothejungle.com/fr/companies/ratp-smart-systems"><span className="company">RATP Smart Systems</span></a> in Paris 🇫🇷.
                                <br /><br />
                                Let me develop the app of your dreams 🧚🏻
                            </p>
                            <Link to='/resume'>
                                <Button className='call-to-action' content='More about my work and my experience' icon='right arrow' labelPosition='right' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="separator waves"> </div>
            <div className="section secondary-color">
                <br/><br/>
                <div className="otherStuff hidden">
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
                        <br/><br/>
                        Looking for a dev for your next NFT project? You are in the right place.
                        <br/>
                        Someone to turn your crossplatform app to a native one for a better user experience? I am here for you.
                    </p>
                    <br/><br/>
                    <div className="ui three column grid">
                    <div className="column center aligned tech">
                        <i className="fa-brands fa-react techLogo" style={{"color":"#61dafb", "paddingBottom":"15px"}}></i>
                        <br/>
                        React
                    </div>
                    <div className="column center aligned tech">
                        <i class="fa-brands fa-swift techLogo" style={{"color":"rgb(223, 70, 52)", "paddingBottom":"15px"}}></i>
                        <br/>
                        Swift
                    </div>
                    <div className="column center aligned tech">
                        <i className="fa-brands fa-ethereum techLogo" style={{"color":"rgb(77, 28, 225)", "paddingBottom":"15px"}}></i>
                        <br/>
                        Solidity
                    </div>
                    </div>
                    <br/><br/>
                    <div className="ui two column grid">
                    <div className="column center aligned tech">
                        <i className="fa-brands fa-html5 techLogo" style={{"color":"rgb(255, 141, 1)", "paddingBottom":"15px"}}></i>
                        <br/>
                        HTML5
                    </div>
                    <div className="column center aligned tech">
                        <i className="fa-solid fa-database techLogo" style={{"color":"rgb(29, 143, 122)", "paddingBottom":"15px"}}></i>
                        <br/>
                        Different DBMS paradigms
                    </div>  
                    </div>
                </div>
                <br/><br/>
            </div>
            <div className="section secondary-color">
                <div className="publications hidden">
                    <h2>
                        Recent Posts
                    </h2>
                    <p>
                        I frequently write about my work.<br/>
                        Here are some of my latest articles :<br/>
                    </p>
                    {this.state.feed.map((item, index) => {
                        return (
                            <h4 key={index} className="feed-item-title"><a href={item.link} target="blank">{item.title}</a></h4>
                        )
                    })}
                </div>
            </div>
            <div className="separator waves2"> </div>
            <Footer />
        </div>
        )
    }
}

export default Home;
