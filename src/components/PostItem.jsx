import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <div className='post__title'>{props.number}. {props.post.title}</div>
                <div className='text'>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton className='post__button'>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem
