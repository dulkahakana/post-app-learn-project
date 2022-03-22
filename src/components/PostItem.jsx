import React from 'react'
import MyButton from './UI/button/MyButton'
import { Link } from 'react-router-dom'

const PostItem = ({number, post, remove}) => {
    // const router = useHistory()
    // console.log(router)
    return (
        <div className='post_box'> 
            <div className='post__content'>
                <div className='post__title'>{post.id}. {post.title}</div>
                <div className='text'>
                    {post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton
                    className='open-post__btn'
                    onClick={(f) => f}
                >
                    <Link to={`/posts/${post.id}`}>Открыть</Link>
                </MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem
