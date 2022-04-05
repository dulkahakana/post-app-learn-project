import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './UI/navbar/Navbar'

const Layout = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main className='App'>
                <Outlet/>
            </main>

            <footer>
                <div className="footer-text">
                    <p>2022</p>
                </div>
            </footer>
        </>
    )
}

export default Layout