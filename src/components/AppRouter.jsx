import React from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/posts/:id' element={<PostIdPage/>} />

            <Route path='/about' element={<About/>} />    
            <Route path='*' element={
                <div className='error_message'>Страница не найдена</div>
            } />
        </Routes>
    )
}

export default AppRouter