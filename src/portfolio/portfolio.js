import React, { Component } from 'react'
import MainMenu from '../components/menu/menu'
import Footer from '../components/footer/footer'
import { Card } from 'semantic-ui-react'
import './portfolio.css'

class Portfolio extends Component {

    items = [
        {
            link: 'https://smart-contract.me',
            name: 'smart-contract.me',
            description: 'A very simple react web app that I use a very simple front end to interact with any smart contract given it\'s address and ABI on an Ethereum network.',
            date: '2022',
            icon: 'ethereum'
        },
        {
            link: 'https://apps.apple.com/fr/app/freebox-home/id1510724405',
            name: 'Freebox Home',
            description: 'A native iOS app to setup, configure and play around your Freebox Home objects and security system.',
            date: '2021',
            icon: 'app-store-ios'
        },
        {
            link: 'https://github.com/Que20/homebridge-http-motion-sensor',
            name: 'Motion sensor Homebridge plugin',
            description: 'Just a Homebridge plugin that will update a PIR status based on a HTTP request.',
            date: '2020',
            icon: 'js-square'
        },
        {
            link: 'https://github.com/Que20/UIDrawer',
            name: 'UIDrawer',
            description: 'A customizable UIPresentationController that allows modals to be presented like a bottom sheet.',
            date: '2019',
            icon: 'swift'
        },
        {
            link: 'https://apps.apple.com/fr/app/leboncoin/id484115113',
            name: 'Leboncoin',
            description: 'The Leboncoin iOS App. I\'ve worked for 5 year on features and support at Leboncoin.',
            date: '2014-2019',
            icon: 'app-store-ios'
        }
    ]

    render() {
        function faIcon(name) { return 'fab fa-'+name }
        return (
            <div>
                <MainMenu activeItem='portfolio' />
                <div className='portfolio-container'>
                    <h2>
                        A non-exhaustive list of product and projects I had the chance to work on.
                    </h2>
                    <h5 style={{"fontWeight": "normal"}}>
                        Note: These are only the projects (still) in porduction, designed for public/external use, and without any form NDA.
                    </h5>
                    <br/>
                    <Card.Group itemsPerRow={3} stackable>
                        {this.items.map((item, key) => {
                            return (
                                <Card key={key} href={item.link} style={{"height":"200px", "textAlign":"left"}}>
                                    <Card.Content>
                                        <i className={faIcon(item.icon)} style={{"position":"absolute", "right": "10px", "font-size":"30px"}}></i>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Meta>{item.date}</Card.Meta>
                                        <Card.Description>
                                            {item.description}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </Card.Group>
                </div>
                <Footer />
            </div>
        )
    }
}
 
export default Portfolio