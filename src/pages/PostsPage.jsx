// импортируем реакт везде где будет реакт компонент
// везде где будет использоваться jsx
import React, { useEffect, useState, useRef } from 'react'

// Import services and utils
import PostService from '../API/postService'
import { getPageCount } from '../utils/pages'

// Import user hooks
import { usePosts } from '../hooks/usePost'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'

// Import components
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
// import MySelect from '../components/UI/select/MySelect'
// пагинация отключена - загрузка постов при сроле
// import Pagination from '../components/UI/pagination/Pagination'

// Приложение
const PostsPage = () => {
    const [posts, setPosts] = useState([])    
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()    
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        // setPosts(response.data)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPosts(limit, page)
    }, [limit, page])

    // для пагинации
    // const changePage = (page) => {
    //     setPage(page)
    //     fetchPosts(limit, page)
    // }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]) 
    } 
    
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }    

    return (
        <div className='App'>
            <MyButton
                disabled={true}
                onClick={() => setModal(true)}
                className='create-post__btn'
            >Создать пост</MyButton>

            <hr/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {/* выбор кол-ва отображаемых постов, для пагинации */}
            {/* <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Кол-во элементов на странице'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: -1, name: 'Показать все'},
                ]}
            />             */}

            {postError &&
                <div className='error_message'>Произошла ошибка: {postError}</div>
            }

            {/* {isPostLoading 
                ? <Loader/>
                :   <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={'Список постов'}
                />
            } */}

            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={'Список постов'}
            />    

            <div ref={lastElement} style={{height: 10}}></div>

            {isPostLoading && <Loader/>}

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} setVisible={setModal}/>
            </MyModal>

            

            {/* подгрузка постов при скроле */}
            {/* <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />         */}
            
        </div>
    )
}

export default PostsPage