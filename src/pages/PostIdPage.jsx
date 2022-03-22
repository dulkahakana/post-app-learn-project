import React from 'react'
import { useParams } from 'react-router-dom'
const PostIdPage = () => {
    const param = useParams()
    return (
        <div className='block__title'>
            Вы открыли страницу поста с ID: {param.id}
        </div>
    )
}

export default PostIdPage