import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'
import RequireAuth from '../../hoc/RequireAuth'

const Navbar = () => {
    const navigate = useNavigate()
    const {user, signOut} = useAuth()

    const navLinkStyle = ({isActive}) => isActive ? 'nav__link nav__active' : 'nav__link'

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <NavLink className={navLinkStyle} to='home'>Главная</NavLink>
                <NavLink className={navLinkStyle} to='posts'>Посты</NavLink>
                <NavLink className={navLinkStyle}  to='about'>О сайте</NavLink>
                {user
                    ? <p className='nav__link' onClick={() => signOut(() => navigate('/', {replace: true}))}>Выйти</p>
                    : <NavLink className={navLinkStyle} to='login'>Войти</NavLink>
                }
            </div>
        </div>
    )
}

export default Navbar