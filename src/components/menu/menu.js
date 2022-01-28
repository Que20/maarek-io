import React, { Component, createRef } from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon, Ref, Visibility } from 'semantic-ui-react';
import './menu.css'

class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuShown: true,
            calculations: {
              width: window.innerWidth,
            },
          }
    }

    contextRef = createRef()

    componentDidMount = () => {
        const width = this.state.calculations.width
        this.setState({ menuShown: (width > this.maxWidthDesktop()) })
    }
        
    handleUpdate = (e, { calculations }) => {
        this.setState({ menuShown: (calculations.width > this.maxWidthDesktop()) })
        this.setState({ calculations })
    }

    toggleMenu = () => {
        const current = this.state.menuShown
        this.setState({ menuShown: !current })
    }

    maxWidthDesktop = () => { return 768 }

    render() {
        const condition = (test, content) => {
            return test ? content : null
        }
        const { activeItem } = this.props
        return (
        <Ref innerRef={this.contextRef}>
        <Visibility onUpdate={this.handleUpdate}>
        <Menu secondary stackable>
            {condition(this.state.calculations.width < this.maxWidthDesktop(), (
                <Menu.Item active={false} onClick={this.toggleMenu}>
                    <Icon name='bars' />
                    maarek.io
                </Menu.Item>
            ))}
            {condition(this.state.menuShown, (
                <>
                {condition(this.state.calculations.width > this.maxWidthDesktop(), (
                    <Link to='/'>
                        <Menu.Item content='maarek.io' active={false}/>
                    </Link>
                ))}
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
                <Link to='/portfolio'>
                    <Menu.Item
                    name='portfolio'
                    active={activeItem === 'portfolio'}
                    />
                </Link>
                </>
            ))}
        </Menu>
        </Visibility>
        </Ref>
        )
    }
}

export default MainMenu;