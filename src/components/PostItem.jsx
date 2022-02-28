import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    return (
        // "это был блок <div className='post'>
        <div className='post_box'> 
            <div className='post__content'>
                <div className='post__title'>{props.number}. {props.post.title}</div>
                <div className='text'>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem
