import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

const Navbar = () => {
    const navigate = useNavigate()
    const {user, signOut} = useAuth()

    const navLinkStyle = ({isActive}) => isActive ? 'nav__link nav__active' : 'nav__link'

    const logout = () => {
        localStorage.removeItem('auth')
        signOut(() => navigate('/', {replace: true}))
    }

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <NavLink className={navLinkStyle} to='home'>Главная</NavLink>
                <NavLink className={navLinkStyle} to='posts'>Посты</NavLink>
                <NavLink className={navLinkStyle}  to='about'>О сайте</NavLink>
                {user
                    ? <p className='nav__link' onClick={logout}>Выйти</p>
                    : <NavLink className={navLinkStyle} to='login'>Войти</NavLink>
                }
            </div>
        </div>
    )
}

export default Navbar