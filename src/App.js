// импортируем реакт везде где будет реакт компонент
import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {

    const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

    return (
        <div className='App'>
            <Counter/>
            <Counter/>
            <Counter/>
            <h3>{value}</h3>
            <input
                type="text" 
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}

export default App
