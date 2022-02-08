// импортируем реакт везде где будет реакт компонент
import React, { useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'

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

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className = 'App'>
            
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'Список постов'}/>
                : <div className='block__title'>Посты не были найдены</div>
            }
            <PostForm create={createPost}/>
        </div>
    )
}

export default App
