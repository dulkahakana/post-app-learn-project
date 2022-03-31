import React from 'react'
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

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value
        const userPassword = form.userpassword.value
        
        if (userPassword === testPassword) {
            signIn(user, () => navigate(fromPage))
        }

    }

    return (
        <div className='login-page'>
            <h1 className='block__title'>Страница для логина</h1>
            <form onSubmit={handleSubmit}>
                <MyInput type='text' placeholder='Введите логи' name='username'/>
                <MyInput type='password' placeholder='Введите пароль' name='userpassword'/>
                <MyButton type='submit'>Войти</MyButton>
            </form>
        </div>
    )
}

export default LoginPage