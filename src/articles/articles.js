import React, { Component } from 'react'
import Parser from 'rss-parser'
import Footer from '../components/footer/footer'
import MainMenu from '../components/menu/menu'
import { Card } from 'semantic-ui-react'
import './articles.css'


class Articles extends Component {

    constructor(props) {
        super(props)
        this.state = { articles: [] }
    }
    
    componentDidMount = async () => {
        const parser = new Parser()
        const feed = await parser.parseURL('https://data.maarek.io/kevinmaarek')
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

                    <Card.Group>
                    {/* <ul style={{"listStyleType": "none", "marginBlockStart":"0px", "paddingInlineStart": "0px"}}> */}
                    {this.state.articles.map((data, index) => {
                        return (
                            <Card fluid key={index} href={data.url}>
                                <Card.Content>
                                    <Card.Header>{data.title}</Card.Header>
                                    <Card.Meta>Added on {data.date}</Card.Meta>
                                    <Card.Description>
                                        <ul className="tag-list">
                                            {data.tags.map((tag, index) => {
                                                return (
                                                    <li key={index} className="tag">
                                                        {tag}
                                                    </li> 
                                                )
                                            })}
                                        </ul>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })}
                    {/* </ul> */}
                    </Card.Group>
                </div>
                <Footer />
            </div>
        )
    }
}
 
export default Articles