import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const testPassword = 'user'

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            signIn(localStorage.getItem('auth'), () => navigate(fromPage))
        }
    }, [])

    const login = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value
        const userPassword = form.userpassword.value
        
        localStorage.setItem('auth', user)

        if (userPassword === testPassword) {            
            signIn(user, () => navigate(fromPage))
        }
    }

    return (
        <div className='login-page'>
            <h1 className='block__title'>Страница для входа</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин' name='username'/>
                <MyInput type='password' placeholder='Введите пароль' name='userpassword'/>
                <MyButton type='submit'>Войти</MyButton>
            </form>
        </div>
    )
}

export default LoginPage