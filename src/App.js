// импортируем реакт везде где будет реакт компонент
import React, { useMemo, useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.' },
        { id: 2, title: 'C#', body: 'Объектно-ориентированный язык программирования' },
        { id: 3, title: 'Python', body: 'Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью' },
        { id: 4, title: 'Java', body: 'Cтрого типизированный объектно-ориентированный язык программирования общего назначения' },
    ])
    
    const [filter, setFilter] = useState({sort: '', quary: ''})

    const sortedPosts = useMemo(() => {
        console.log('sortedPosts - обнавлен')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.quary.toLowerCase()))
    }, [filter.quary, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]) 
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }    

    return (
        <div className = 'App'>
            <PostForm create={createPost}/>

            <hr/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            
            {sortedAndSearchedPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
                : <div className='block__title'>Посты не были найдены</div>
            }
        </div>
    )
}

export default App
