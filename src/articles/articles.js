import React, { Component } from 'react'
import Parser from 'rss-parser'
import MainMenu from '../components/menu'
import 'semantic-ui-css/semantic.min.css'
import './articles.css'


class Articles extends Component {

    constructor(props) {
        super(props)
        this.state = { articles: [] }
    }
    
    componentDidMount = async () => {
        const parser = new Parser()
        const feed = await parser.parseURL('https://dev.to/feed/kevinmaarek')
        const elems = feed.items.map((item) => {
            let pubDate = item.pubDate.split(' ')
            let date = pubDate[1] + " " + pubDate[2] + " " + pubDate[3]
            return ({title: item.title, url: item.link, tags: item.categories, date: date})
        })
        this.setState({ articles: elems })
    }

    render() {
        return (
            <div>
                <MainMenu activeItem='articles' />
                <div className="blog-container">
                    <h2>
                        I try to write <span style={{"fontStyle":"italic"}}>frequently</span> about my work, my thoughts and ideas. 💡
                    </h2>
                    <h3>
                        These are the ones that made it into some actual articles.
                        <br />
                        Most are hosted on my <a href="dev.to">dev.to</a> page.
                    </h3>
                    <br/>
                    <ul style={{"listStyleType": "none"}}>
                    {this.state.articles.map((data, index) => {
                        return (
                            <li key={index} >
                                <ul style={{"listStyleType": "none"}}>
                                    <li> <h3><a href={data.url}>{data.title}</a></h3> </li>
                                    <li>
                                        <ul className="tag-list">
                                            {data.tags.map((tag, index) => {
                                                return (
                                                    <li key={index} className="tag">
                                                        {tag}
                                                    </li> 
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li>Added on {data.date}</li>
                                </ul>
                                <br />
                            </li>
                        )
                    })}
                    </ul>
                </div>
                <div className="section">
                    <div className="contact centered">
                        <div>
                            <h2>
                                Come say hi!
                            </h2>
                            <a href="mailto:kevin@maarek.io">kevin (at) maarek.io</a><br/><br/>
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
 
export default Articles