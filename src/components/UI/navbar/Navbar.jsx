import React from 'react'
import { NavLink } from 'react-router-dom'

// TODO нужно реализовать NavLink (для стилизации активного роута)

const Navbar = () => {

    const navLinkStyle = ({isActive}) => isActive ? 'nav__link nav__active' : 'nav__link'

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <NavLink className={navLinkStyle} to='/posts'>Посты</NavLink>
                <NavLink className={navLinkStyle}  to='/about'>О сайте</NavLink>
            </div>
        </div>
    )
}

export default Navbar