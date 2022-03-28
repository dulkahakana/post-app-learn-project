import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = ({number, post, remove}) => {
    const {id, title, body} = post
    
    const navigate = useNavigate()
    const goPost = () => navigate(`/posts/${id}`)

    return (
        <div className='post_box'> 
            <div className='post__content'>
                <div className='post__title'>{id}. {title}</div>
                <div className='text'>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={goPost}>Открыть</MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem
