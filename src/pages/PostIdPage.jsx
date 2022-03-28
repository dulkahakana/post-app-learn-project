import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/postService'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

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
        <>            
            <div className='block__title'>
                Вы открыли страницу поста с ID: {params.id}
            </div>

            {isLoading
                ? <Loader/>
                : <>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </>
            }
            <h2>Комментарии к посту:</h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map((comm, index) => 
                        <div key={index}>
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>
                        </div>    
                    )}
                </div>    
            }
        </>
        
    )
}

export default PostIdPage