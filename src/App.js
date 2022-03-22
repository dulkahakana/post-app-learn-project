import React from 'react'

// components
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/AppRouter'

// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'


function App() {
    return (
        <>
            <Navbar/>            
            <AppRouter/>
        </>            
    )
}

export default App