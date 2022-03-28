import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './UI/navbar/Navbar'

const Layout = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout