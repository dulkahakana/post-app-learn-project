// импортируем реакт везде где будет реакт компонент
import React, { useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

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
    
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

    }

    return (
        <div className = 'App'>
            <PostForm create={createPost}/>

            <hr/>

            <div className='sort__options'>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>

            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'Список постов'}/>
                : <div className='block__title'>Посты не были найдены</div>
            }
        </div>
    )
}

export default App
