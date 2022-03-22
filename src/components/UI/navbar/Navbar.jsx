import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link className='nav__link' to='/posts'>Посты</Link>
                <Link className='nav__link' to='/about'>О сайте</Link>
            </div>
        </div>
    )
}

export default Navbar