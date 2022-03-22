import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({number, post, remove}) => {
    return (
        // "это был блок <div className='post'>
        <div className='post_box'> 
            <div className='post__content'>
                <div className='post__title'>{post.id}. {post.title}</div>
                <div className='text'>
                    {post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem
