// импортируем реакт везде где будет реакт компонент
// везде где будет использоваться jsx
import React, { useEffect, useState } from 'react'
import PostService from './API/postService'
// импорт пользовательских хуков
import { usePosts } from './hooks/usePost'
import { useFetching } from './hooks/useFetching'
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
import Loader from './components/UI/Loader/Loader' 

// Приложение
function App() {
    const [posts, setPosts] = useState([])    
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })    

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]) 
    } 
    
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }    

    return (
        <div className = 'App'>
            <MyButton 
                onClick={() => setModal(true)}
                className='create-post__btn'
            >Создать пост</MyButton>

            <hr/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            /> 

            {postError &&
                <div className='error_message'>Произошла ошибка: {postError}</div>
            }

            {isPostLoading
                ? <Loader/>
                : <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={'Список постов'}
                />
            }            

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} setVisible={setModal}/>
            </MyModal>            
        </div>
    )
}

export default App