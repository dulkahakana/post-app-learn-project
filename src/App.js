// импортируем реакт везде где будет реакт компонент
import React, { useState } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'

function App() {

    // const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

    return (
        <div className='App'>
            <div className='post'>
                <div className='post__content'>
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript - язык програмирования
                    </div>
                    <div className='post__btns'>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default App
