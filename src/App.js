// импортируем реакт везде где будет реакт компонент
import React, { useState } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
import PostList from './components/PostList'

// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Язык програмирования' },
        { id: 2, title: 'C#', body: 'Язык програмирования' },
        { id: 3, title: 'Python', body: 'Язык програмирования' },
        { id: 4, title: 'Java', body: 'Язык програмирования' },
    ])
    // const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ')

    return (
        <div className='App'>
            <PostList posts={posts} title={'Список постов 1'}/>

            <form className='create__post'>
                <input type='text' placeholder='Название поста'/>
                <input type='text' placeholder='Описание поста'/>
                <button className='post__button'>Создать пост</button>
            </form>
        </div>
    )
}

export default App
