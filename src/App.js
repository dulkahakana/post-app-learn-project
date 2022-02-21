// импортируем реакт везде где будет реакт компонент
// везде где будет использоваться jsx
import React, { useEffect, useState } from 'react'
import { usePosts } from './hooks/usePost'
import axios from 'axios'
// Import components
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'


// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'

function App() {
    const [posts, setPosts] = useState([])    
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const fetchPost = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        // console.log(response.data)
    }

    useEffect(() => {
        fetchPost()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]) 
    }
    
    

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }    

    return (
        <div className = 'App'>

        <MyButton onClick={fetchPost}>GET POST TEST</MyButton>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />     
            
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={'Список постов'}
            />

            <MyModal
                visible={modal}
                setVisible={setModal}    
            >
                <PostForm create={createPost} setVisible={setModal}/>
            </MyModal>

            <hr/>
            
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        </div>
    )
}

export default App