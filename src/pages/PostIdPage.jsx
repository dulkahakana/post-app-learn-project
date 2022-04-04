import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import PostService from '../API/postService'
import MyButton from '../components/UI/button/MyButton'

import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const navigate = useNavigate()
    
    // const goBack = () => navigate(-1)
    const goBack = () => navigate('/posts')

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='post-page'>            
            <div className='post-page__id'>
                Post ID: {params.id}
            </div>

            {isLoading
                ? <Loader/>
                : <div className='post-page__body'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            }
            {isComLoading
                ? <Loader/>
                : <div className='post-page__comments'>
                    <h2>Комментарии к посту:</h2>
                    {comments.map((comm, index) => 
                        <div key={index} className='comment'>
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>
                        </div>    
                    )}
                </div>    
            }
            <MyButton onClick={goBack}>Назад</MyButton>
        </div>
        
    )
}

export default PostIdPage