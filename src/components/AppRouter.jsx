import React from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import HomePage from '../pages/HomePage'
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'

import Layout from './Layout'

import RequireAuth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

const AppRouter = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path='home' element={<HomePage />} />
                    <Route path='posts' element={
                        <RequireAuth>
                            <Posts />
                        </RequireAuth>
                    } />
                    <Route path='posts/:id' element={
                        <RequireAuth>
                            <PostIdPage />
                        </RequireAuth>
                    } />
                    <Route path='login' element={<LoginPage />}/>
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NotFoundPage/>} /> 
                </Route>
            </Routes>
        </AuthProvider>

    )
}

export default AppRouter