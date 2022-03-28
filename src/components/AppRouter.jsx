import React from 'react'
import { Route, Routes } from 'react-router-dom'

//TODO не работает после .map
// import { routes } from '../routes/routes'

// pages
import Posts from '../pages/Posts'
import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from './Layout'

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Posts/>} />

                <Route path='/' element={<Posts/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/posts/:id' element={<PostIdPage/>} />
                <Route path='/about' element={<About/>} />

                {/* {routes.map((route, index) => 
                    <Route
                        key={index}
                        element={route.element()}
                        path={route.path}
                    />
                )} */}

                <Route path='*' element={<NotFoundPage/>} /> 
            </Route>
        </Routes>

    )
}

export default AppRouter