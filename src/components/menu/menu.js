import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'semantic-ui-react';
import './menu.css'

function MainMenu(props) {
    const maxWidthDesktop = 768
    const menuRef = useRef();
    const { activeItem } = props

    const [menuShown, setMenuShown] = useState(window.innerWidth > maxWidthDesktop)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            console.log('hello')
            const w = menuRef.current.clientWidth
            setMenuShown((w > maxWidthDesktop))
            setWidth(w)
        });
    }, []);

    const toggleMenu = () => {
        const current = menuShown
        setMenuShown(!current)
    }

    const condition = (test, content) => {
        return test ? content : null
    }

    return (
        <div ref={menuRef}>
        <Menu secondary stackable>
            {condition(width < maxWidthDesktop, (
                <Menu.Item className='site-title' active={false} onClick={toggleMenu}>
                    <Icon name='bars' />
                    maarek.io
                </Menu.Item>
            ))}
            {condition(menuShown, (
                <>
                {condition(width > maxWidthDesktop, (
                    <Link to='/'>
                        <Menu.Item className='site-title' content='maarek.io' active={false}/>
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
                <a href='https://maarek.myportfolio.com/'>
                    <Menu.Item
                    name='photography'
                    active={false}
                    />
                </a>
                </>
            ))}
        </Menu>
        </div>
        );
}

export default MainMenu;