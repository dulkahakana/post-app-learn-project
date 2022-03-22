// импортируем реакт везде где будет реакт компонент
// везде где будет использоваться jsx
import React, { useEffect, useState } from 'react'
import PostService from './API/postService'
import { getPageCount, getPagesArray } from './utils/pages'

// импорт пользовательских хуков
import { usePosts } from './hooks/usePost'
import { useFetching } from './hooks/useFetching'


// Import components
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/loader/Loader'

// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'

// Приложение
function App() {
    const [posts, setPosts] = useState([])    
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)    

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]) 
    } 
    
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }    

    return (
        <div className='App'>
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

            <div className='page__wrapper'>
                {pagesArray.map(p => 
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page__number page__current' : 'page__number'}
                    >
                        {p}
                    </span>
                )}
            </div>
            
        </div>
    )
}

export default App