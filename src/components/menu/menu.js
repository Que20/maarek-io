import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
import './menu.css'

class MainMenu extends Component {
    
    render() {
        const { activeItem } = this.props
        return (
        <Menu secondary>
            <Link to='/'>
                <Menu.Item
                content='maarek.io'
                active={false}
                />
            </Link>
            <Link to='/'>
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                />
            </Link>
            <Link to='/resume'>
                <Menu.Item
                name='resume'
                active={activeItem === 'resume'}
                />
            </Link>
            <Link to='/articles'>
                <Menu.Item
                name='articles'
                active={activeItem === 'articles'}
                />
            </Link>
        </Menu>
        )
    }
}

export default MainMenu;