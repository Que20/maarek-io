import React, { Component } from 'react'
import MainMenu from '../components/menu'
import 'semantic-ui-css/semantic.min.css'
import './blog.css'
const axios = require('axios');


class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = { articles: [] }
    }
    
    componentDidMount = () => {
        axios.get('https://data.maarek.io/blog.json').then((response) => {
            console.log(response.data.articles)
            this.setState({
                articles: response.data.articles.sort(function (a, b) {
                    if (a.timestamp > b.timestamp) {
                        return -1;
                    }
                    if (a.timestamp < b.timestamp) {
                        return 1;
                    }
                    return 0;
                })
            })
        })
    }

    render() {
        if (!window.location.href.includes("#test")) {
            return (
                <div>
                    <MainMenu activeItem='blog' />
                    <div className="blog-container" style={{"marginTop":"150px"}}>
                        <h1 className='centered'>🚧 This page is still under construction! 🚧</h1>
                        <br/>
                        <h2 className='centered'>Come back in few days 😇</h2>
                    </div>
                </div>
            )
        }
        const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return (
            <div>
                <MainMenu activeItem='blog' />
                <div className="blog-container">
                    <h2>
                        I try to write <span style={{"fontStyle":"italic"}}>frequently</span> about my work, my thoughts and ideas.
                    </h2>
                    <h3>
                        These are the ones that made it into some actual articles.
                        <br />
                        Some are hosted on my <a href="dev.to">dev.to</a> page, some other on my peronnal Notion.
                    </h3>
                    <br/>
                    <ul className="articles" style={{"listStyleType": "none"}}>
                    {this.state.articles.map((data, index) => {
                        return (
                            <li key={index} >
                                <ul className="articles" style={{"listStyleType": "none"}}>
                                    <li><a href={data.url}>{data.title}</a></li>
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
                                    <li>Added on {this.convertDate(data.timestamp*1000)}</li>
                                    <li>by Kevin Maarek</li>
                                </ul>
                                <br />
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }

    convertDate = (inputFormat) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
    }
}
 
export default Blog